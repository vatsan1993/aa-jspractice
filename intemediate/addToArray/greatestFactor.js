// Write a function greatestFactorArray that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. A greatest factor is the largest number that divides another with no remainder. For example, the greatest factor of 16 is 8. (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).


let isPrime = function (num){
    for(let i=2; i < num; i++ ){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
function getlargestFactor(value){
    let i;
    if(isPrime(value)){
        return value;

    }else if(value %2 == 0){
        i = value-1;
    }else{
        i = value;
    }
    for(; i>1; i--){
        if(value % i == 0){
            return i;
        }
    }
    return 1;
}
function greatestFactorArray(array) {
    let arr = [];
     for( let i = 0; i < array.length; i++){
        let value = array[i];
        let factor = getlargestFactor(value);
        arr.push(factor);
    }
   return arr
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
