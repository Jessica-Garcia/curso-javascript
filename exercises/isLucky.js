/*
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first half of the digits is equal 
to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/

const number = 1230;

function isLucky(n) {

    const str = n.toString();
    const size = str.length;

    const firstHalf = str.slice(0, size/2);
    const secondHalf = str.slice(size/2);

    const sum = (acc, value) => {
        acc += parseInt(value);
        return acc;    
    }

    sumFirstHalf = firstHalf.split('').reduce(sum, 0);
    sumSecondHalf = secondHalf.split('').reduce(sum, 0);

    return sumFirstHalf === sumSecondHalf;
}

console.log(isLucky(number));