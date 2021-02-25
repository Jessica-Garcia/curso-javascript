const numbers = [2000, 100, 20, 60, 10, 400, 5, 3000, 500];

const binarySearch = (array, value) => {
    array.sort((a, b) => a - b);

    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        const half = Math.floor((start + end) / 2);

        if(array[half] === value){
            return true;
        }else if(array[half] < value){
            start = half + 1;
        }
        else{
            end = half - 1;
        }
    }
    return false;
}

console.log(binarySearch(numbers, 400));