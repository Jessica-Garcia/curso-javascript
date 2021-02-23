const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9] 
];


function diagonalDifference(matrix) {
    const mainDiagonal = [];

    matrix.every((array, i) => {
        array.every((value, j) => {
            if(i === j){
                mainDiagonal.push(value);
            }
            return true;
        })
        return true;
    })

    const secondaryDiagonal = [];

    matrix.every((array, i) => {
        array.every((value, j) => {
            if(i + j === array.length -1){
                secondaryDiagonal.push(value);
            }
            return true;
        })
        return true;
    })


    const sumMainDiagonal = mainDiagonal.reduce((acc, value) => {
        acc += value;
        return acc;
    })


    const sumSecDiagonal = secondaryDiagonal.reduce((acc, value) => {
        acc += value;
        return acc;
    })

    return Math.abs(sumMainDiagonal - sumSecDiagonal);
}
console.log(diagonalDifference(matrix));
