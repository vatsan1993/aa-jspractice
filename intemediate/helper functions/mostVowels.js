// Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.



// Your code here
let getNumFactors= function(num){
    let arr= [];
    for(let i=1; i< num; i++){
        if(num%i==0){
            arr.push(i);
        }
    }
    return arr.length;
}
let isAntiPrime= function(number){
    let currentFactors= getNumFactors(number);
    for(let i=1; i< number; i++){
        if(getNumFactors(i)> currentFactors){
            return false;
        }
    }
    return true;
}


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
