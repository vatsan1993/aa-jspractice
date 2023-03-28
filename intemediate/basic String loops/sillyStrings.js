// Write a function sillyString that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

// Your code here
function sillyString(str){
    // create a variable to store the result. its empty at the start
    // create a variable called vowels that contains vowels
    //loop through each character in the string.
        // if the current character is a vowel,
            // add the vowel a character b to the result.
    // return the output;
    let newString='';
    let vowels='aeiou';
    for(let i= 0; i< str.length; i++){
        if(vowels.includes(str[i])){
            newString+= str[i]+'b'+ str[i];
        }
        else{
            newString+= str[i];
        }
    }
    return newString
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
