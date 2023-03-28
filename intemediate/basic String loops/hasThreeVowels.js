// Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.
// Your code here
function hasThreeVowels(str){
    // create count variable
    // create vowels variable
    // loop through the vowels
        // if the current character from vowels is in str
            // increase count
    // check if there are 3 vowels
    let count= 0;
    let vowels= 'aeiou';
    for(let i=0; i< vowels.length; i++){
        if(str.includes(vowels[i])){
            count++;
        }
    }
    return count>=3;

}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
