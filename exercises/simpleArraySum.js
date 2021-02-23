function simpleArraySum(ar) {
    let sum = 0;
    for(let num of ar){
        sum += num;
    }

    return sum;
}

const array = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(array));
