// printing the first ten numbers of the fibonacci sequence

// const fibonacciSequence = (termLimit) => {
//     let term1 = 0;
//     let term2 = 0;
//     let res = 1;

//     for(let i = 0; i <= termLimit; i++){
//         console.log(res);
//         term1 = term2;
//         term2 = res;
//         res = term1 + term2;
//     }
// }

//fibonacciSequence(10);


const cache = [];

const fibonacciRec = (n) => {
    if(n === 0) {
        cache[0] = 0;
        return cache[0];
    }
    if(n === 1) {
        cache[1] = 1;
        return cache[1];
    };
    cache[n] = cache[n-1] + cache[n-2];
    return cache[n];
}

const printFiboUntil= (n) => {
    for(let i = 0; i <= n; i++){
        console.log(fibonacciRec(i));
    }
}

printFiboUntil(50);