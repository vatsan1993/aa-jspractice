// Write a method caesarCipher that takes in a string and a number. The function should return a new string where every character of the original is shifted num characters in the alphabet.

// Feel free to use this variable:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    // create cipherText
    // loop through the string.
        // get the current character location in alphabet.
        // add provided number;
        // if the number is more than or alphabet lenth, find the remainder
        // convert back to character by looking the location again
        // add the character to the cipherText
    // return the cipherText
    let cipherText= '';
    for(let i=0; i< string.length; i++){
        let pos= alphabet.indexOf(string[i]);
        pos+=num;
        if(pos> alphabet.length){
            pos%=alphabet.length;
        }
        cipherText+= alphabet[pos];
    }
    return cipherText;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
