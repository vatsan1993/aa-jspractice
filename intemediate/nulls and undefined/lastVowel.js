// Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful.


// your code here
const lastVowel= function(str){
    let vowels= 'aeiou';
    for(let i=str.length-1; i>=0; i--){
        let char= str[i]
        let lowerChar= char.toLowerCase();
        if(vowels.includes(lowerChar)){
            return char;
        }
    }
    return null
}




console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
