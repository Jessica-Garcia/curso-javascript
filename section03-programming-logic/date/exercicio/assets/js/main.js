// //Solução de quem não leu a documentação!

// // selecionando o elemento pela classe e pela tag dentro dessa classe
// const h1 = document.querySelector('.container h1')

// const data = new Date()

// const formataHorario = (horario) => `${horario}`.padStart(2, '0')

// const mostraDiaSemana = (NumeroDiaSemana) => {
//     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-feira',
//         'Sexta-feira', 'Sábado']
//     return diasSemana[NumeroDiaSemana]
// }

// const mostraMes = (numeroMes) => {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
//         'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
//     return meses[numeroMes]
// }

// const formataData = (data) => {
//     const dia = data.getDate()
//     const diaSemana = mostraDiaSemana(data.getDay())
//     const mes = mostraMes(data.getMonth())
//     const ano = data.getUTCFullYear()
//     const hora = formataHorario(data.getHours())
//     const min = formataHorario(data.getMinutes())

//     return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`
// }

// // modificando o conteúdo do elemento selecionado dentro do html
// h1.innerHTML = formataData(data)


// Solução de quem leu a documentação!

const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })

