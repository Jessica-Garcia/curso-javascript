// o for in retorna índices de arrays ou chaves de objetos

const frutas = ['Pera', 'Maçã', 'Uva']

for (const index in frutas) {
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Keith',
    sobrenome: 'Richards',
    idade: 2020
}

for (const chave in pessoa) {
    console.log(chave, pessoa[chave])
}