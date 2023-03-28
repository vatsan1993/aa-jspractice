// Write a function reverseSentence(sentence) that takes in a sentence as an arg. The function should return a new sentence where the order of the words is reversed. Note that you should reverse the order among words, not the order among characters.
let reverseSentence = function(sentence) {
    let words = sentence.split(" ");
    for( let i = 0, j = words.length-1; i < j ; i++, j--){
        let temp = words[i];
        words[i] = words[j];
        words[j] = temp;
    }
    return words.join(" ");
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
