const countBits = function(n) {
    const binary = n.toString(2);

    const sum = (acc, e) => acc + e;

    const res = binary.split('').map(Number).reduce(sum);
    return res;
};

console.log(countBits(1234));