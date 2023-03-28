// Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.
let isPrime = function (num){
    for(let i=2; i < num; i++ ){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
let pickPrimes= function (array) {
    let primes=[];
    for( let i = 0; i < array.length; i++){
        let value = array[i]
        if(isPrime(value)){
            primes.push(value)
        }
    }
    return primes;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
