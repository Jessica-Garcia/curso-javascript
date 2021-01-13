// map only changes the values of the original array, 
//returns an array of the same size as the original array, but with changed values 

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// multiply the values by 2

console.log('values multiplied by 2');

const multipliedNumbers = numbers.map(value => value * 2);
console.log(multipliedNumbers);

// several modifications

const sum10 = e => e + 10;
const multipliesBy3 = e => e * 3;
const convertsToMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log('values added to 10, multiplied by 3 and converted');

const result = numbers.map(sum10).map(multipliesBy3).map(convertsToMoney);
console.log(result);


const people = [
    {name: 'Bob', age: 36, isAlive: false},
    {name: 'Janis', age: 27, isAlive: false},
    {name: 'Keith', age: 77, isAlive: true},
    {name: 'Amy', age: 27, isAlive: false},
    {name: 'Ozzy', age: 72, isAlive: true},
    {name: 'Tina', age: 81, isAlive: true},
    {name: 'Jimmy', age: 27, isAlive: false}
]

//for each element, just return a string with the person's name
const names = people.map(person => person.name);
console.log(names);

//for each element, remove only the "name" key from the object
const ages = people.map(person => ({age: person.age}))
console.log(ages);

// add an "id" key for each object
const addId = people.map((person, index) => {
    const newPerson = {...person};
    newPerson.id = index + 1;
    return newPerson;
})
console.log(addId);