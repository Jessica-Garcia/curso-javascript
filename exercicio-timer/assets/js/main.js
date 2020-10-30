function cronometro() {
    //selecinando o relógio
    const relogio = document.querySelector('.relogio')

    let segundos = 0
    let timer
    // funcção que cria hora a partir dos segundos passados

    function criaHora(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    // função que inicia o relógio

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criaHora(segundos)
        }, 1000)
    }

    // capturando o evento de click

    document.addEventListener('click', function (event) {
        const elemento = event.target
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}
cronometro()

