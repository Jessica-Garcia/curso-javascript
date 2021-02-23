//Given the string, check if it is a palindrome.


function checkPalindrome(inputString){
    const string = inputString.split("").reverse().join("");
    if(inputString.toLowerCase() === string.toLowerCase()) return true;
    return false;
}

console.log(checkPalindrome("aaabaaaa"));