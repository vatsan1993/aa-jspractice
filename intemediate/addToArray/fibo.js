// Write a function fibonacciSequence that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.


let fibonacciSequence = function(num){

    let arr= []
    a = 0
    b = 1
    while(arr.length < num){
        arr.push(b);
        let c = a+b;
        a = b;
        b = c;
    }
    return arr;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
