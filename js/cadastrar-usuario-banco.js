console.warn("CADASTRAR USUARIO BANCO JS TA FUNFANDO")


const form = document.querySelector('.register_form');

form.addEventListener('submit', async (e) => {

    //Impede recarregar a página
    e.preventDefault();

    //Captura os dados do formulário
    const dados = {
        nome: form.nome.value,
        email: form.email.value,
        user: form.user.value,
        date: form.date.value,
        password: form.password.value
    };

    try {

        //Envia para o servidor
        const resposta = await fetch('/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        //Converte resposta para JSON
        const resultado = await resposta.json();

        //Se cadastro deu certo
        if (resultado.sucesso) {
            alert('Conta criada com sucesso!');

            //Limpa formulário
            form.reset();

        } else {
            alert(resultado.mensagem);
        }

    } catch (erro) {
        console.log(erro);
        alert('Erro ao conectar com servidor');
    }
});