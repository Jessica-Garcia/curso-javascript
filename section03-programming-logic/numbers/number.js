let num1 = 1
let num2 = 0.7
let num3 = 0.1

// para converter para string => toString()
num1 = num1.toString()

// para saber se o número é inteiro
console.log(Number.isInteger(num3))

// para saber se o valor não é um número
console.log(Number.isNaN(num2)) // retorna false se o valor é um número, e true para NaN

// para corrigir a imprecisão de números com ponto flutuante
let soma = num2 + num3 // 0.7999999999999999

console.log(Number(soma).toFixed(2)) // 0.80
console.log(parseFloat(soma).toFixed(2)) //0.80