const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// atribuição via desestrutruração (Arrays)

const [, segundo, , quarto, , sexto, ...resto] = numeros

console.log(segundo, quarto, sexto) // 20 40 60

console.log(resto) // [ 70, 80, 90 ]

const listaNumeros = [[3, 2, 1], [6, 5, 4], [9, 8, 7]]
const [lista1, lista2, lista3] = listaNumeros

console.log(lista3[2])


// atribuição via desestrutruração (Objetos)

const pessoa = {
    nome: 'Janis',
    sobrenome: 'Joplin',
    idade: 27,
    endereco: {
        rua: 'São Franscisco',
        numero: 0
    }
}


//pode-se atribuir valor padrão para as variáveis para o caso de elas não existirem dentro do objeto, 
// será retornado o valor padrão configurado apenas se a variável não existir dentro do objeto
const { nome = '', sobrenome } = pessoa

console.log(nome, sobrenome)

const { endereco: { rua } } = pessoa

console.log(rua)