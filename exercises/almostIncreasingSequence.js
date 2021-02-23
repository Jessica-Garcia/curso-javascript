/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly 
increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order 
to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]. 
*/

const seq = [1, 3, 5, 67, 98, 3];



const isIncreasingSequence = (sequence) => {
    for(i = 0; i < sequence.length - 1; i++){
        if(sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isIncreasingSequence(seq))

const getNoSequenceIndex = (sequence) => {
    let index = 0;
    for(i = 0; i < sequence.length - 1; i++){
        if(sequence[i] >= sequence[i + 1]){
            index = i - 1;
        }
    }
    return index;
}

console.log(getNoSequenceIndex(seq));

const almostIncreasingSequence = (sequence) => {
    const index = getNoSequenceIndex(sequence);
    for(let i = index; i < sequence.length; i++){
        sequence2 = [...sequence];
        sequence2.splice(i, 1);

        if(isIncreasingSequence(sequence2)){
            return true;
        } 
    }
    return false;
}

console.log(almostIncreasingSequence(seq));