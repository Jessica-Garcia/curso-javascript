//Filter returns an array;
//receives a function that returns true or false



const people = [
    {name: 'Bob', age: 36, isAlive: false},
    {name: 'Janis', age: 27, isAlive: false},
    {name: 'Keith', age: 77, isAlive: true},
    {name: 'Amy', age: 27, isAlive: false},
    {name: 'Ozzy', age: 72, isAlive: true},
    {name: 'Tina', age: 81, isAlive: true},
    {name: 'Jimmy', age: 27, isAlive: false}
]
// return people whose name has 5 letters or more
const peopleNameFiveLetters = people.filter(person => person.name.length >= 5);
console.log(peopleNameFiveLetters);

// return people who are over 50 years old
const peopleOver50 = people.filter(person => person.age > 50);
console.log(peopleOver50);

// return people whose name ends with the letter a
const peopleNameEndsA = people.filter(person => person.name.toLowerCase().endsWith('a'));
console.log(peopleNameEndsA);

// return the people who are alive
const livingPeople = people.filter(person => person.isAlive);
console.log(livingPeople);

// return the people who are alive and whose name ends with the letter a

const living = people => people.isAlive;
const endsA = people => people.name.toLowerCase().endsWith('a');

console.log(people.filter(living).filter(endsA));

// return values greater than 10

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const greaterThanTen = numbers.filter(value => value > 10);

console.log(greaterThanTen);
