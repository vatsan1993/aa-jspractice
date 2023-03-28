// Write a function allElseEqual that takes in an array of numbers. The function should return the element of the array that is equal to half of the sum of all elements of the array. If there is no such element, the method should return null.


let halfSum= function(arr){
    let total= 0;
    for(let i=0; i< arr.length; i++){
        total+=arr[i];
    }
    return total/2;
}
function allElseEqual(arr) {
    // your code here
    let halfTotal= halfSum(arr);
    for(let i=0; i< arr.length; i++){
        let currentNumber= arr[i];
        if(currentNumber == halfTotal){
            return halfTotal;
        }
    }
    return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
