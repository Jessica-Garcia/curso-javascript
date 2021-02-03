
/**
 * the every() method checks whether all elements obey a condition, if yes, returns true, if not returns false
 * the some () method checks whether at least one element complies with a condition, if yes, 
    returns true, if not, returns false
 */


const people = [
    {name: 'Bob', age: 36, isAlive: false},
    {name: 'Janis', age: 27, isAlive: false},
    {name: 'Keith', age: 77, isAlive: true},
    {name: 'Amy', age: 27, isAlive: false},
    {name: 'Ozzy', age: 72, isAlive: true},
    {name: 'Tina', age: 81, isAlive: true},
    {name: 'Jimmy', age: 27, isAlive: false}
]


const checkAlive = (value) => value === true;

// are all alive? true or false

const allAlive = people.map(p => p.isAlive).every(checkAlive);

console.log(allAlive);

// is someone alive? true or false

const someoneAlive = people.map(p => p.isAlive).some(checkAlive)

console.log(someoneAlive);