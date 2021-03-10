// Initializing a Map
const map = new Map(); // this returns an empty Map =>  Map(0) {}

// adding values to the Map => set(key, value) method

map.set('name', 'Janis Joplin');
map.set('occupation', 'Singer');
map.set('best song', 'Kozmic blues');

// getting values from a Map => Ex. map.get('name');

console.log(map.get('name')); // returns Janis Joplin

// the keys of a Map can be of any type

map.set(true, 'She is a woman');
map.set(27, 'Age when she died');

const death = {year:  1970}

map.set(death, true); // object as key

console.log(map);

//to know the number of elements of a Map => map.size

console.log(map.size);

/* search for an element with the has(key) method,
returns true, if map has an element with the key,
returns false, if map doesn't have an element with the key
*/

console.log(map.has('name')); // true

// Removes the element with key death

map.delete(death);

console.log(map); // returns the Map without the key death

console.log(map.has(death)); // false


// copying the Map

const map2 = new Map(map);

console.log(map2);

// removing all Map elements with the clear() method

map2.clear();


console.log(map2.size); // 0

// getting all the keys from the Map => map.keys()

console.log(map.keys()); // [Map Iterator] { 'name', 'occupation', 'best song', true, 27 }

// getting all Map values => map.values()

console.log(map.values());

// getting all key-value pairs => map.entries()

console.log(map.entries());

const ageMap = new Map();
ageMap.set('Mila', 28);
ageMap.set('Jess', 29);
ageMap.set('Amy', 26);
ageMap.set('Dryca', 19);

// iterate the Map with forEach

ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old!`)
})

// iterate the Map with for of

for(const [key, value] of ageMap){
    console.log(`${key} is ${value} years old!`); // Mila is 28 years old!
}

for(const key of ageMap.keys()){
    console.log(`${key} is a name`); // Mila is a name
}

for(const value of ageMap.values()){
    console.log(`${value} is an age`); // 28 is an age
}

// How to Convert an Object to a Map => const map = new Map(Object.entries(obj))

const artistObj = {
    nome: 'Keith Richards',
    age: 77,
    profession: 'guitarist'

};

const artistMap = new Map(Object.entries(artistObj));


// How to Convert a Map to an Object => Object.fromEntries(map);

const newObj = Object.fromEntries(map);


// How to Convert a Map to an Array => Array.from(map) or  [...map]

const array1 = Array.from(map);

const array2 = [...map];

// how to convert an array to a Map

const array3 = [['id', 123], ['name', 'Mick']];
const myMap = new Map(array3);

// merging Maps

const mergedMap = new Map([...map, ...ageMap])
