// 1-parar o envio do formulário capturando o evento de submit

const form = document.querySelector('#form')


form.addEventListener('submit', function (e) {
    //previne o comportamento padrão do evento
    e.preventDefault();

    //seleciona os inputs, (e.target informa o elemento que está recebendo o evento) 
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    //seleciona os valores dos inputs convertendo para Number
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    // valida peso e altura
    if (!peso) {
        setResultado('Peso Inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura Inválida', false)
        return
    }

    //chama a função que calcula o IMC

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu imc é ${imc} (${nivelImc})`
    setResultado(msg, true)
})

//função que calcula o IMC

function getImc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

// função que retorna o nível em que se enconta o imc

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc > 39.9) return nivel[5]
    if (imc > 34.9) return nivel[4]
    if (imc > 29.9) return nivel[3]
    if (imc > 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

// função que cria parágrafo

function criaP() {
    //cria um parágrafo
    const p = document.createElement('p')
    return p

}

// função que adiciona o parágrafo dentro da div resultado

function setResultado(msg, isValid) {
    //seleciona o resultado
    const resultado = document.querySelector('#resultado')

    //limpa o resultado
    resultado.innerHTML = ''


    // cria um parágrafo
    const p = criaP()

    // muda cor do parágrafo de acordo com a validação dos valores inseridos nos campos
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('invalido')
    }

    // insere a mensagem dentro do parágrafo
    p.innerHTML = msg

    // insere p dentro de resultado
    resultado.appendChild(p)
}