// Strings são indexadas
//         01234567
let str = 'Um texto'

//para acessar um elememto da string pelo índice => [] ou charAt()
console.log(str[4]) // e
console.log(str.charAt(6)) // t

//para saber em qual índice começa determinada palavra dentro da string => indexOf
console.log(str.indexOf('texto')) // 3

// para saber qual o índice do elemento que está depois de um determinado índice => indexOf
console.log(str.indexOf('o', 3)) // 7

//para substituir uma palavra na string => replace
console.log(str.replace('Um', 'Outro')) // outro texto

// para saber o tamanho da string => length
console.log(str.length) // 8

// para cortar a string de um índice a outro (exclusive) => slice() (o último indice não é incluído)

console.log(str.slice(3, 8))
