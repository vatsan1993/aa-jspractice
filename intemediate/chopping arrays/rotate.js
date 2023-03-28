let rotateRight = function(array, num) {
    let index = array.length - num
    let secondPart = array.splice(index, num);
    for(let i = num-1; i >= 0; i--){
        array.unshift(secondPart[i]);
    }
}
let rotateLeft = function(array, num) {
    let firstPart = array.splice(0, num);
    for(let i=0; i< num; i++){
        array.push(firstPart[i]);
    }
}
let rotate = function(array, num) {
    if (num > 0){
        rotateRight(array, num);
    }else{
        num = Math.abs(num);
        rotateLeft(array, num);
    }
    // console.log(array)
}
let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
