// Write a function twoDimensionalSum(arr) that
// takes in a 2D array of numbers and returns the total sum of all numbers.


let twoDimensionalSum = function(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++){
        let subArr = array[i];
        for(let j = 0; j < subArr.length; j++){
            total += subArr[j];
        }
    }
    return total;
}
let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
