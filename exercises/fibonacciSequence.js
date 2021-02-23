// printing the first fifty numbers of the fibonacci sequence

const fibonacciSequence = (termLimit) => {
    let term1 = 0;
    let term2 = 1;
    let res = 0;

    for(let i = 0; i <= termLimit; i++){
        res = term1 + term2;
        console.log(res);
        term1 = term2;
        term2 = res;
    }
}

fibonacciSequence(50);