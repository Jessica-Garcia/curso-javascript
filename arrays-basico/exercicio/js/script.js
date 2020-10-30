
function meuEscopo() {
    // selecionando o formulário dentro de document pela sua classe
    const form = document.querySelector('.form')

    // selecionando a div dentro de document pela sua classe
    const resultado = document.querySelector('.resultado')

    // array para armazenar os objetos
    const pessoas = []


    //função que captura os valores a cada vez que o formulário é enviado

    function recebeEventoForm(evento) {
        //função que não deixa o comportamento padrão de um evento ser executado
        evento.preventDefault();
        // selecionando elementos dentro do elemento form pelas suas classes
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    //para capturar o evento de submit do form

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()