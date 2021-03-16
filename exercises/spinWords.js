/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). Strings passed 
in will consist of only letters and spaces. Spaces will be included 
only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"
 */



function spinWords(words){
    
    let wordsArray = words.split(' ');

    for(let i in wordsArray){
        if(wordsArray[i].length >= 5){
        let newElement = wordsArray[i].split('').reverse().join('');
        wordsArray.splice(i, 1, newElement);

        }
    }

    return wordsArray.join(' ');

}

const words = "Hey fellow warriors";
console.log(spinWords(words))

