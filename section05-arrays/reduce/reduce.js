// reduces the array by a single element

//if the accumulator is not defined in the function, 
//the value of the accumulator will be the first element

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const totalSum = numbers.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
}, 0);

console.log(totalSum);


const totalMult = numbers.reduce((accumulator, value) => {
    accumulator *= value;
    return accumulator;
}, 1);

console.log(totalMult);



const even = (e) => e % 2 === 0;

const sumValues = (accumulator, value) => {
    accumulator += value;
    return accumulator;
}

console.log(numbers.reduce(sumValues));

const sumEvenNumbers = numbers.filter(even).reduce(sumValues);
console.log(sumEvenNumbers);





const people = [
    {name: 'Bob', age: 36, isAlive: false},
    {name: 'Janis', age: 27, isAlive: false},
    {name: 'Keith', age: 77, isAlive: true},
    {name: 'Amy', age: 27, isAlive: false},
    {name: 'Ozzy', age: 72, isAlive: true},
    {name: 'Tina', age: 81, isAlive: true},
    {name: 'Jimmy', age: 27, isAlive: false}
]

// return the older person
const olderPerson = people.reduce((acc, person) => {
    if(acc.age > person.age) return acc;
    return person;
})

console.log(olderPerson);

// return the sum of ages

const sumAges = people.map(p => p.age).reduce((acc, age) => acc + age);
console.log(sumAges)


// are all alive? true or false

const checkAlive = (value) => value === true;

const allAlive = people.map(p => p.isAlive).reduce((acc, value) => {
    if(acc && value) return true;
    return false;
})

console.log(allAlive);
