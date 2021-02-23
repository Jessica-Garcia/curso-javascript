const matrix = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
]

function matrixElementsSum(matrix) {
    for(let line = 0; line < matrix.length; line ++){  
        for(let column = 0; column < matrix[line].length; column++){
            if(matrix[line][column] === 0){
                for(let i = line; i < matrix.length; i++){
                    matrix[i][column] = 0
                }
            }
        }
    }
    
    let sum = 0;

     for(let line = 0; line < matrix.length; line ++){  
        for(let column = 0; column < matrix[line].length; column++){
            sum += matrix[line][column];
        }
    }
    return sum;   
}

console.log(matrixElementsSum(matrix));

