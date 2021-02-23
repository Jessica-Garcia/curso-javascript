const array = ["enyky", "benyky", "yely", "varennyky"];


const returnWordSize = (inputArray) => {
    let larger = inputArray[0].length;
    for (const word of inputArray) {
        if(larger < word.length){
            larger = word.length;
        }
    }
    return larger;
}

function allLongestStrings(inputArray) {
    const longestStrings = [];
    if(inputArray.length > 1){
        const biggestStringSize = returnWordSize(inputArray);
        for (const str of inputArray) {
            if(str.length >= biggestStringSize){
                longestStrings.push(str)
            }
        }
        return longestStrings;
    }
    return inputArray;
}