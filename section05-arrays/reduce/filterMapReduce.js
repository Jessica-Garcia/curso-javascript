//return the sum of double all the even numbers

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const evenNumbers = value => value % 2 === 0;
const doubleNumbers = value => value * 2;
const sumNumbers = (acc, value) => acc + value;
console.log(numbers.filter(evenNumbers).map(doubleNumbers).reduce(sumNumbers));