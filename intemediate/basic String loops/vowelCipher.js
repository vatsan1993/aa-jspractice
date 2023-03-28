// Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.

function vowelCipher(string) {
    // your code here
    // create cipherText variable
    // create vowels
    // loop through the string.
        // if the character is a vowel
            // get its location and add 1
            // if its greater than vowel length
                // find the remainder
            // convert back to character
        // else
            // add the character
    // return the cipherText
    let cipherText= '';
    let vowels= 'aeiou';
    for(let i=0; i< string.length; i++){
        if(vowels.includes(string[i])){
            let pos= vowels.indexOf(string[i]);
            pos++;
            if(pos> vowels.length-1){
                pos%=vowels.length
            }
            cipherText+= vowels[pos];
        }else{
            cipherText+= string[i];
        }
    }
    return  cipherText;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
