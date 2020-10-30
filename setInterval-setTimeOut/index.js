const retornaHora = () => {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', { hour12: false })
}

const executaPrimeiraFuncao = setTimeout(() => {
    const mostraHora = setInterval(() => console.log(retornaHora()), 1000)
    const paraMostraHora = setTimeout(() => clearInterval(mostraHora), 5000)
});

let contador = 0
const limite = 5


const executaSegundaFuncao = setTimeout(() => {
    const incrementaContador = setInterval(() => {
        console.log(contador)
        contador++
        if (contador > limite) clearInterval(incrementaContador)
    }, 1000);
}, 5000);


const palavra = 'olá'
let posicao = 0

const executaTerceiraFuncao = setTimeout(() => {
    const exibeLetrasDaPalavra = setInterval(() => {
        console.log(palavra[posicao])
        posicao++
        if (posicao === palavra.length) clearInterval(exibeLetrasDaPalavra)
    }, 1000);
}, 11000);