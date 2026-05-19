async function salvarUsuario() {

  const nome = document.getElementById('nome').value;

  const resposta = await fetch('/usuarios', {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      nome: nome
    })
  });

  const dados = await resposta.json();

  console.log(dados);

  alert('Usuário salvo no banco!');
}