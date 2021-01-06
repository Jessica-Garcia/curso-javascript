/* 
A função Date() é uma função cosntrutora, e para utilizá-la é necessário usar a palavra new antes dela e 
iniciá-la com letra maiúscula
*/

const data = new Date() // data atual
console.log(data.toString()) // EX.: Mon Oct 19 2020 15:45:06 GMT-0300 (Horário Padrão de Brasília)

//const umDia = 60 * 60 * 24 * 1000

// para criar data => ano, mês - 1 (mês começa em zero), dia, hora, minuto, segundo e milésimos de segundos
//precisa ter no mínimo ano e mês

const data2 = new Date(2020, 9, 19, 15, 54, 30)
console.log(data2.toString()) // Mon Oct 19 2020 15:54:30 GMT-0300 (Horário Padrão de Brasília)

// Datas no formato string (Mais utilizado), pode-se usar o número do mês sem subtrair 1, ano-mês-dia HH:mm:ss

const data3 = new Date('2020-10-19 16:02:55.100')
console.log(data3.toString()) // Mon Oct 19 2020 16:02:55 GMT-0300 (Horário Padrão de Brasília)

// para obter o número do dia em determinada data

const dia = data3.getDate()
console.log(dia) // 19

// para obter o mês de determinada data

const mes = data3.getMonth() + 1
console.log(mes) // 10

// para obter o ano de determinada data

const ano = data3.getFullYear()
console.log(ano) // 2020

// para obter a hora de determinada data

const hora = data3.getHours()
console.log(hora) // 16

// para obter os minutos de determinada data

const min = data3.getMinutes()
console.log(min) // 2

// para obter os segundos de determinada data

const sec = data3.getSeconds()
console.log(sec) // 55

// para obter os segundos de determinada data

const miliSec = data3.getMilliseconds()
console.log(miliSec) // 100

// para obter o número do dia na semana de determinada data

const diaSemana = data3.getDay()
console.log(diaSemana) // 1 (segunda-feira) nos dias da semana zero equivale ao domingo e 6 ao sábado 0 - 6

// para obter os milésimos de segundo da data atual a partir de 01/01/1970

const data4 = Date.now()
console.log(data4) // 1603135646681


// função que adiciona zeros à esquerda do número
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

// funçaõ que formata uma data
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data5 = new Date()
const dataBrasil = formataData(data5)
console.log(dataBrasil) // 19/10/2020 16:44:06

// função que retorna o dia da semana

function mostraDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-Feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return 'Dia da semana inválido'
    }
}

let diaDaSemana = mostraDiaSemana(data.getDay())
console.log(diaDaSemana) // segunda-feira
