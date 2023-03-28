// Write a function productWithReduce(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array.
// your code here
function productWithReduce(array){
    let product= 1;
    for(let i=0; i< array.length; i++){
        product *= array[i];
    }
    return product;
}



console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
