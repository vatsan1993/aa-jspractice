// Write a function doubleLetterCount that takes in a string and returns the number of times that the same letter repeats twice in a row.
function doubleLetterCount(str) {
    // your code here
    // create a count with 0
    // loop through the string till length-1  increase by 1
        // if the current and the next characters are same
            // increase the count
            // increase loop var by 1
    // return count at the end
    let count=0;
    for(let i=0; i< str.length-1; i++){
        if(str[i] === str[i+1]){
            count++;
            i++;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
