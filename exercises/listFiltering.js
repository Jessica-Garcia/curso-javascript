/*
you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.
*/

const list = [1,2,'aasf','1','123',123];

function filter_list(list) {
    const numbersFiltering = (e) => Number.isInteger(e);
    const numbers = list.filter(numbersFiltering);
    return numbers;
}

console.log(filter_list(list))
