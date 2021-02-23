/**
 * Ex 1: Find the highest value in an array
 * Ex 2: Find the smallest value in an array
 * Ex 3: Return an object with the highest value and the smallest value of an array
 */

const numbers = [10, 50, 2, 300, 15, 18]

// const maxValue = Math.max(...numbers)
// const minValue = Math.min(...numbers)

const returnObj = (array) => {
    const maxValue = Math.max(...array)
    const minValue = Math.min(...array)
    const obj = {
        minValue: minValue,
        maxValue: maxValue
    }
    return obj
}

const obj = returnObj(numbers)
console.log(obj)