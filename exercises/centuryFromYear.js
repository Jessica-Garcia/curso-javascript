/*
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.

*/


const centuryFromYear = (year) => {
    return Math.ceil(year/100)    
}

const currentCentury = centuryFromYear(2106);
console.log(currentCentury);

