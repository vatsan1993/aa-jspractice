// your code here
let removeLastVowel = function(word){
    let newWord = '';
    let vowels = 'aeiou';
    let last = true;
    for(let i = word.length-1; i >= 0; i--){
        let char= word[i];
        if(vowels.includes(char) && last){
            last= false;
            continue;
        }
        newWord = char + newWord;
    }
    return newWord;
}
let hipsterfy = function(sentence){
    let words= sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        words[i] = removeLastVowel(word);
    }
    return words.join(" ")
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
