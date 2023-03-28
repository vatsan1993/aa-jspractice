// Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them.
// your code here
const removeEWords= function(sentence){
    let words= sentence.split(' ')
    let eRemoved= []
    for(let i=0; i< words.length; i++){
        let word= words[i]
        if(word.toLowerCase().includes('e')){
            continue;
        }
        eRemoved.push(word);
    }
    return eRemoved.join(' ')
}
console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
