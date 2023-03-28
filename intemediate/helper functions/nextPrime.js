// Write a function nextPrime that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.


// your code here
let isPrime= function(number){
    if(number< 2){
        return false;
    }
    for(let i=2; i< number; i++){
        if(number % i==0){
            return false;
        }
    }
    return true;
}

let choosePrimes= function(nums){
    let primeValue= [];
    for(let val of nums){
        if(isPrime(val)){
            primeValue.push(val)
        }
    }
    return primeValue;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
