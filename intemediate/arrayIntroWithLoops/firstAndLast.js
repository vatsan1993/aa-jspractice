// Write a function firstAndLast that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last elements of the array.


// Your code here
function firstAndLast(nums){
    const firstVal= nums[0];
    const lastVal= nums[nums.length-1];
    if(nums.length%2==0){
        return firstVal+ lastVal;
    }else{
        return firstVal-lastVal
    }
}


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
