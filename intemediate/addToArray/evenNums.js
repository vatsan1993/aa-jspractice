// Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

// Define this function using function expression syntax.


// your code here
let evenNumbers = function(max){
    let arr = [];
    for( let i = 2 ; i < max ; i+=2){
        arr.push( i )
    }
    return arr;
}
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
