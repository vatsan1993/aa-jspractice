let getVowelIndex= function(word){
    let vowels= 'aeiou';
    for(let i =  1; i < word.length; i++){
        if(vowels.includes(word[i])){
            return i;
        }
    }
    return 0;
}
let convertWord = function(word){
    let index = getVowelIndex(word);
    return  word.slice(index )
}
let consonantCancel = function(sentence) {
    let words = sentence.split(" ")
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        words[i] = convertWord(word);
    }
    return words.join(" ");
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
