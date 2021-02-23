/*
By considering the terms in the Fibonacci 
sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/

const fibonacciEvenSum = () => {
    let term1 = 0;
    let term2 = 1;
    let res = 0;
    let sum = 0;
    while(term1 <= 4000000 && term2 <= 4000000){
        res = term1 + term2;
        term1 = term2
        term2 = res
        if(res % 2 == 0){
            sum+= res;
        }
    }
    return sum;
}

console.log(fibonacciEvenSum())
