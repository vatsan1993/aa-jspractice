// Write a function lastIndex that takes in a string and a character. The function should return the last index where the character can be found in the string.


function lastIndex(str, char) {
    // your code here
    // loop from the end of the string
        // if the current char is char
            // return index
    // return -1
    for(let i= str.length-1; i>0; i--){
        if(str[i]== char){
            return i;
        }
    }
    return -1
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
