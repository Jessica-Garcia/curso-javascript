/*
Given an array of integers, find 
the pair of adjacent elements that has the largest product 
and return that product.
*/

const array = [-24, 4, -3, 8, -12];

function adjacentElementsProduct(inputArray) {
    let prod = inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length; i++) {
        const result = inputArray[i] * inputArray[i + 1];
        if(result > prod){
            prod = result;
        }
    }
    return prod;
}

console.log(adjacentElementsProduct(array));