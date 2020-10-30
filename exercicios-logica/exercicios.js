
const retornaNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min)


// 1- Escreva uma função que recebe 2 números e retorna o maior deles

const x = retornaNumeroAleatorio(1, 50)
const y = retornaNumeroAleatorio(1, 50)

const retornaMaiorNumero = (x, y) => Math.max(x, y)

const maior = retornaMaiorNumero(x, y)

console.log(`O maior numero entre ${x} e ${y} é ${maior}\n`)

/* 2- Escreva uma função que recebe uma altura e uma largura de uma imagem e
retorna true se a imagem estiver no modo paisagem ou false se estiver no modo retrato*/

const altura = retornaNumeroAleatorio(1000, 2000)
const largura = retornaNumeroAleatorio(1000, 2000)

const isPaisagem = (largura, altura) => largura > altura
const resposta = isPaisagem(largura, altura) ? 'Sim' : 'Não'

console.log(`A largura da imagem é ${largura} e a altura é ${altura}. A imagem está em modo paisagem? ${resposta}\n`)

/*
 Escreva uma função que recebe um número retorna o seguinte:
 numero é divisível por 3 = Fizz 
 numero é divisível por 5 = Buzz 
 numero é divisível por 3 e por 5 = FizzBuzz 
 numero não é divisível por 3 e por 5 = retorna o próprio número
 checar se é numero, se não for retornar o proprio valor passado
 use a função com números de 0 a 50
 */

const checaNumero = num => {
    if (typeof num === 'number') {
        const isDivisivelPor3 = num % 3 == 0
        const isDivisivelPor5 = num % 5 == 0

        if (isDivisivelPor3 && isDivisivelPor5) return 'FizzBuzz'
        if (!isDivisivelPor3 && !isDivisivelPor5) return num
        if (isDivisivelPor3) return 'Fizz'
        if (isDivisivelPor5) return 'Buzz'
    }
    else {
        return `${num}!!!!`
    }
}

// const num = 'oi'
// console.log(checaNumero(num))

for (let numero = 0; numero <= 50; numero++) {
    console.log(`${numero} => ${checaNumero(numero)}`)
}
