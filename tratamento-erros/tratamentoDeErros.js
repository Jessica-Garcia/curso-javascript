const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números')
    }
    return x + y
}

try {
    // executa quando não há erros
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch (e) {
    // executa quando há erros
    console.log('Ocorreu um erro')
} finally {
    // executa independente de ocorrer ou não erros
    // usa-se quando precisa-se abrir algo que deve ser fechado depois como conexão ou arquivo
    console.log('Executou o bloco finally\n')
}



function retornaHora(data) {
    // se a data for enviada e não for instância de Date, lançar erro
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    }

    // se a data não for enviada, gerar a data automaticamente
    if (!data) {
        data = new Date()
    }

    // retorna a hora com 2 digitos e em formato 24 horas

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try {
    const data = new Date(1991, 11, 16, 08, 30, 15)
    const hora = retornaHora(data)
    console.log(hora)
} catch (e) {
    console.log('Data inválida')
} finally {
    console.log('Tenha um bom dia!')
}