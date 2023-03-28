// Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.
// your code here
function abbreviate(str){
    // create a variable vowels;
    // loop through the vowels.
        // if the current vowel is in the string,
            // replace it with empty string
    // return the string
    let vowels='aeiouAEIOU';
    for(let i=0; i< str.length; i++){
        if (vowels.includes(str[i])){
            str= str.replace(str[i], '');
        }
    }
    return str;
}






console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
