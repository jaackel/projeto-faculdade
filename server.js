const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();


//Permite receber JSON

app.use(express.json());

//Permite receber dados de formulário HTML

app.use(express.urlencoded({ extended: true }));


//Libera scripts JS
app.use('/js', express.static(path.join(__dirname, 'js')));


//Libera arquivos HTML/CSS
app.use(express.static(__dirname));


//Banco de dados

const db = new sqlite3.Database('./database/banco.db');


//Cria tabela

db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    usuario TEXT,
    nascimento TEXT,
    senha TEXT
  )
`);


//ROTA CADASTRO

app.post('/cadastro', (req, res) => {

  const { nome, email, user, date, password } = req.body;

  
  //Verifica se email já existe
  
  db.get(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],

    (err, usuario) => {

      if (err) {

        return res.status(500).json({
          sucesso: false,
          mensagem: 'Erro no servidor'
        });
      }

      
      //Email já cadastrado
      
      if (usuario) {

        return res.json({
          sucesso: false,
          mensagem: 'Email já cadastrado'
        });
      }

      
      //Insere usuário
      
      db.run(
        'INSERT INTO usuarios (nome, email, usuario, nascimento, senha) VALUES (?, ?, ?, ?, ?)',
        [nome, email, user, date, password],

        function(err) {

          if (err) {

            return res.status(500).json({
              sucesso: false,
              mensagem: 'Erro ao cadastrar usuário'
            });
          }

          return res.json({
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso'
          });
        }
      );
    }
  );
});


//ROTA LOGIN

app.post('/login', (req, res) => {

  const { email, senha } = req.body;

  db.get(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha],

    (err, usuario) => {

      if (err) {

        return res.status(500).json({
          sucesso: false,
          mensagem: 'Erro no servidor'
        });
      }

      
      //Usuário não encontrado
      
      if (!usuario) {

        return res.json({
          sucesso: false,
          mensagem: 'Login ou senha inválidos'
        });
      }

      
      //Login OK
      
      return res.json({
        sucesso: true,
        mensagem: 'Login realizado com sucesso'
      });
    }
  );
});


//Servidor

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});