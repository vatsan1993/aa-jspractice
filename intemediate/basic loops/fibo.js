// The fibonacci sequence is a sequence of numbers whose first and second elements are 1. To generate further elements of the sequence we take the sum of the previous two elements. For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.
function fibonacci(length) {
    // create an empty array
    // set variable a= 0
    // set variable b= 1
    // loop till we get length number of values into the array
        // push the b value into the array
        // create a temporary variable that will have a+b value
        // copy b's value into a.
        // copy copy c's value into b.
    // return the array at the end
    let fib = [];
    let a= 0;
    let b= 1;
    while(fib.length!= length){
        fib.push(b)
        let c= a+b;
        a= b;
        b= c;
    }
    return fib;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
