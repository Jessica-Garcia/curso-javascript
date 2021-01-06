const elementos = [
    { tag: 'p', texto: 'Kozmic Blues' },
    { tag: 'div', texto: 'Summertime' },
    { tag: 'section', texto: 'Ball and Chain' },
    { tag: 'footer', texto: 'Farewell Song' }
]

// seleciona o primeiro elemento que contém a classe com o nome passado como argumento
const container = document.querySelector('.container')

// cria o elemento passado como argumento, neste caso uma div
const div = document.createElement('div')

// criando cada elemento do array elementos

for (let i = 0; i < elementos.length; i++) {
    // atribuindo via desestruturação o valor de cada elemento para variáveis
    let { tag, texto } = elementos[i]

    // criando as tags  
    let tagCriada = document.createElement(tag)

    // colocando o texto dentro da tag criada
    //tagCriada.innerText = texto

    //outro modo de colocar texto dentro da tag criada

    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)

    // adicionando a tag criada com o texto dentro da div criada anteriormente
    div.appendChild(tagCriada)

}

/* adicionando a div criada acima, com todos os elementos já inseridos nela, dentro do elemento container
(elemento que contém a classe container selecionado acima)*/

container.appendChild(div)

// selecionando h1 de dentro do elemento que contém a classe container
const h1 = container.querySelector('h1')

//configurando uma cor de fundo para esse h1

h1.style.backgroundColor = 'green'
