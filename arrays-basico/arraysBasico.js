const alunos = ['Luiz', 'Maria', 'João']

//para adicionar elementos ao final do array, usar length ou push
alunos[alunos.length] = 'Luiza'
alunos.push('Fábio')


//para adicionar elementos no ínicio do array

alunos.unshift('Marta')
alunos.unshift('Otávio')


// para remover elementos do final do array
alunos.pop()

//pode-se armazenar o elemento removido em uma variável
const removido = alunos.pop()

//para remover elementos do início do array
alunos.shift()

// para remover elementos mantendo o índice sem alterar o tamanho do array, deixa o índice vazio
delete alunos[1]

console.log(alunos)


alunos.push('Eduardo')
alunos.push('André')

console.log(alunos)

// para cortar o array de um índice a outro exclusive,

console.log(alunos.slice(0, 3)) // retorna ao valores do índice 0 até o índice 2