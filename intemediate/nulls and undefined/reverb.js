// Write a function reverb that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

const lastIndex= function(str){
    let index= null;
    let vowels= 'aeiou'
    for(let i= str.length-1; i>=0; i--){
        let char= str[i].toLowerCase();
        if(vowels.includes(char)){
            index=i;
            return index;
        }
    }
    return index;
}
const reverb= function(str){
    if(typeof str !== "string"){
        return null
    }
    let index = lastIndex(str);
    if(index == null){
        return null;
    }
    return str+ str.substring(index);
}
console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
