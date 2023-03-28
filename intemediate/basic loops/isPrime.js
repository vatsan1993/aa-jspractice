

// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.
function isPrime(num){
    //start from 1 and go till the square root of the number(including).
    // if the number is divisible by any of the numbers return false
    // if not, return true at the end;
    for(let i= 2; i<=Math.sqrt(num); i++ ){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
