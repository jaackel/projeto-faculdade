const botao = document.getElementById('login_btn');

botao.addEventListener('click', async () => {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const resposta = await fetch('/login', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email,
            senha
        })
    });

    const dados = await resposta.json();

    if (dados.sucesso) {

        window.location.href = 'pages/feed.html';

    } else {

        alert('Login ou senha inválidos');
    }
});