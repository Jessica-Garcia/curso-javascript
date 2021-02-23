const runMathOperation = () => {
    const sum = (x, y) => x + y;
    const subtraction = (x, y) => x - y;
    const multiplication = (x, y) => x * y;
    const division = (x, y) => y === 0 ? "impossible division!" : x / y;

    return {
        sum,
        subtraction,
        multiplication,
        division
    }
}

const x = 5;
const y = 0;

const calculate = runMathOperation();

const sum = calculate.sum(x, y);
const subtraction = calculate.subtraction(x, y);
const multiplication = calculate.multiplication(x, y);
const division = calculate.division(x, y);

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${subtraction}`);
console.log(`${x} * ${y} = ${multiplication}`);
console.log(`${x} / ${y} = ${division}`);
