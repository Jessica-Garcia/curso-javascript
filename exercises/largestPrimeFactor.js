// What is the largest prime factor of the number 13195?

const isPrime = (factor) => {
    if(factor <= 1) return false;
    if(factor === 2) return true;
    for(let i = 2; i < factor; i++){
        if(factor % i === 0) return false;
    }
    return true;  
}

const returnLargestPrimeFactor = (num) => {
    const primeFactors = [];
    for(let j = 1; j <= num; j++){
        if(isPrime(j) && num % j === 0){
            primeFactors.push(j);
        }
    }
    if(primeFactors.length === 0) return "There is no prime factor"
    return Math.max(...primeFactors);
}

const number = 13195;

console.log(returnLargestPrimeFactor(number));
