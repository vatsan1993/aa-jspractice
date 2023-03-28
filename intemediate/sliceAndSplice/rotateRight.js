// Write a function rotateRight(array, num) that takes in an array and a number as args. The function should return a new array where the elements of the array are rotated to the right num times. The function should not mutate the original array and instead return a new array.

// Define this function using function expression syntax.

// HINT: you can use Array's slice() method to create a copy of an array

let rotateRight = function(arr , num) {
    let index = arr.length - num
    let secondPart = arr.slice(index);
    let firstPart = arr.slice(0, index);
    let result =  secondPart.concat(firstPart);
    return result;
}
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
