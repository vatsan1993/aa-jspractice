

// Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.

let removeVowels =  function(sentence) {
    let vowels = 'aeiou';
    for(let i = 0; i < vowels.length ; i++){
        let vowel = vowels[i];
        sentence = sentence.replace(vowel ,  "");
    }
    return sentence;
}
let abbreviateWords = function(sentence) {
    let words= sentence.split(" ");
    for(let i = 0;  i < words.length ; i++){
        let word =words[i];
        if(word.length > 4){
            words[i] = removeVowels(word);
        }
    }
    return words.join(" ");
}
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
