// Write a function primeFactors that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.
// Your code here
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
let nextPrime= function(number){
    let i=number+1;
    while(true){
        if(isPrime(i)){
            return i;
        }
        i++;
    }

}


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
