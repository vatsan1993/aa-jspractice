// Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.

// your code here
let minValue= function(arr){
    if(arr.length== 0){
        return null;
    }
    let minVal= arr[0];
    for(let i=1; i< arr.length; i++){
        if(arr[i]< minVal){
            minVal= arr[i];
        }
    }
    return minVal;
}
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
