// Write a function hasVowel(str) that takes in a string. The function should return a boolean, true if the string contains at least one vowel, false otherwise.

// Vowels are the letters a, e, i, o, u.
// your code here
function hasVowel(str){
    // return str.toLowerCase().includes('a') ||
    // str.toLowerCase().includes('e') ||
    // str.toLowerCase().includes('i') ||
    // str.toLowerCase().includes('o') ||
    // str.toLowerCase().includes('u')
    let vowels= 'aeiou';
    for (let i=0; i< str.length;i++){
        let ch= str.toLowerCase()[i];
        if(vowels.includes(ch)){
            return true;
        }
    }
    return false;
}





console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
