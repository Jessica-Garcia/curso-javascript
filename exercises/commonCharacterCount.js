/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

const s1 = "aabcc";
const s2 = "adcaa";

const s1 = "aabcc";
const s2 = "adcaa";

const commonCharacterCount = (s1, s2) => {
    let count = 0;
    const s1Map = new Map();
    const s2Map = new Map();

    for(let i = 0; i < s1.length; i++){
        if(!s1Map.has(s1[i])){
            s1Map.set(s1[i], 1);
        }else{
            s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
        }
    }

    for(let i = 0; i < s2.length; i++){
        if(!s2Map.has(s2[i])){
            s2Map.set(s2[i], 1);
        }else{
            s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
        }
    }

    for(const [k, v] of s1Map){
        if(s2Map.has(k)){
            count += Math.min(s2Map.get(k), v);
        }
    }
    return count;
}

console.log(commonCharacterCount(s1, s2));


// function commonCharacterCount(s1, s2) {
//     let count = 0;
//     const arr1 = Array.from(s1.toLowerCase()).sort();
//     const arr2 = Array.from(s2.toLowerCase()).sort();

//     let max = arr1;
//     let min = arr2;

//     if(arr1.length < arr2.length){
//         max = arr2;
//         min = arr1;
//     }

//     for(let i = 0; i < min.length; i++){
//         if(max.includes(min[i])){
//             max.shift();
//             count += 1;
//         }
//     }
//     return count;
// }


// console.log(commonCharacterCount(s1, s2))
