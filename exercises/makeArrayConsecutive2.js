/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
each statue having an non-negative integer size. Since he likes to make things perfect, 
he wants to arrange them from smallest to largest so that each statue will be bigger 
than the previous one exactly by 1. He may need some additional statues to be able 
to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7

[output] integer

The minimal number of statues that need to be added to existing statues such that 
it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function makeArrayConsecutive2(statues) {
    let additionalStatues = 0;
    const orderedStatues = statues.sort((a, b) => a - b);

    for(let i = 0; i < statues.length; i++){
        let diff = orderedStatues[i + 1] - orderedStatues[i];
        if(diff > 0){
            additionalStatues += (diff - 1);
        }
    }
    return additionalStatues;
}

const array = [6, 5, 2, 4]

console.log(makeArrayConsecutive2(array))