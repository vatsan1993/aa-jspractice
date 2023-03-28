// Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

// Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// Hint: Remember the String.includes method!
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    // if the first character is in vowels,
          //return the word with yay added at the end.
    //else
          //create j and set it to 0
          // loop through the word
          // if the current character is a vowel
              // stop the loop
          // return two part of the word switched and ay added at the end.

    let vowels= 'aeiou';
    if(vowels.includes(word[0])){
        return word+'yay';
    }else{
        let j= 0;
        for (; j< word. length; j++){
            if(vowels.includes(word[j])){
                break;
            }
        }
        return word.slice(j)+ word.slice(0, j)+ 'ay'
    }
  };

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
