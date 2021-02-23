/*
Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração,multiplicação e divisão desses valores.
*/

const writeResults = (x, y) => {
    console.log(`${x} + ${y} = ${x + y}`) 
    console.log(`${x} - ${y} = ${x - y}`)
    console.log(`${x} * ${y} = ${x * y}`)
    if(y != 0) 
        console.log(`${x} / ${y} = ${x / y}`)
    else 
        console.log(`${x} / ${y} = impossible to divide by zero`)
}

writeResults(2, 0)
