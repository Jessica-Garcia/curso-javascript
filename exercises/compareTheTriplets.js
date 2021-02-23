const alicePoints = [1, 2, 3];
const bobPoints = [3, 2, 1];

function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            aPoints += 1;
        }else if(a[i] < b[i]){
            bPoints += 1;
        }else{
            aPoints += 0;
            bPoints += 0;
        }
    }

    return [aPoints, bPoints];
}

console.log(compareTriplets(alicePoints, bobPoints));