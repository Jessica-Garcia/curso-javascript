//selecionando o elemento pela classe
const paragrafos = document.querySelector('.paragrafos')

// selecionando uma coleção de elementos que estão contidos dentro do elemento selcionado anteriormente
const ps = document.querySelectorAll('p')

// Tarefa: colocar em cada um dos ps a cor de fundo do body, e mudar a cor do texto para a cor branca

// pegando os estilos que o navegador computou do css do body da página
// usa a função getComputedStyle() passando o elemento do qual se quer pegar o estilo

const estilosBody = getComputedStyle(document.body) // contém todos os estilos css do body que o navegador computou

// selecionando a cor de fundo do body 

const backgroundColorBody = estilosBody.backgroundColor

// colocando a cor de fundo selecionada nos elementos

for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}