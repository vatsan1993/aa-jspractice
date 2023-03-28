// Write a function yeller(words) that takes in an array of words. The function should return a new array where each element of the original array is yelled.


let yell = function(str){
    return str.toUpperCase() + '!';
}
let yeller = function(arr){
    let newArr = [];
    for( let i = 0 ;i < arr.length ; i++ ){
        let val = arr[i];
        let yelled = yell(val);
        newArr.push(yelled);
    }
    return newArr;
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
