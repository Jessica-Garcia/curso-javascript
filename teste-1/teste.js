const retornaFomatoHora = (segundos) => {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0;
const limiteSegundos = 10

const exibeCronometro = setInterval(() => {
    console.log(retornaFomatoHora(segundos))
    segundos++
    if (segundos > limiteSegundos) clearInterval(exibeCronometro)
}, 1000);