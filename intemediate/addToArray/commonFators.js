// Write a function commonFactors that accepts two numbers as arguments. The function should return an array containing positive numbers that are able to divide both arguments.

let commonFactors = function(num1 , num2){
    let newArr = [];
    let minVal= num1 < num2? num1 : num2;
    for(let i = 1; i <= minVal; i++){
        let isDivisible = num1 % i === 0 && num2 % i === 0;
        if(isDivisible){
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]
