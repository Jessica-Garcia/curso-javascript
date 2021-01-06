let num = 9.5475

// para arredondar o valor para baixo

console.log(Math.floor(num)) // 9

// para arredondar o valor para cima

console.log(Math.ceil(num)) // 10

//para arredondar o valor para o número mais próximo

console.log(Math.round(num)) // 10

//para encontrar o maior número entre uma sequencia de números

console.log(Math.max(1, 3, 10, 100, 15)) // 100

//para encontrar o menor número entre uma sequencia de números

console.log(Math.min(1, 3, 10, 100, 15)) // 1

// para encontrar um número aleatório entre um máximo e um mínimo (Multiplica pelo (max * min) + min)

const aleatorio = Math.random() * (10 - 5) + 5

console.log(Math.round(aleatorio))

// para potenciação

console.log(Math.pow(2, 10)) // 1024
console.log(2 ** 10) // 1024