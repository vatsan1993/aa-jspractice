// Write a function pyramidArray(base) that takes in an array of numbers representing the
// base of a pyramid. The function should return a two-dimensional array representing the
// completed pyramid. To generate an element of the next level of the pyramid,
// we sum the elements below and to the left and below and to the right.
// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
let getInnerArray = function(array, numValues){
    let newArr = []
    for(let i= 0; i<= array.length - numValues; i++){
        let total = 0;
        for(let j = i; j < i+numValues; j++){
            total += array[j];
        }
        newArr.push(total);
    }
    return newArr;
}



let pyramidArray = function(array){
    let data =[
        array
    ]
    while(data[0].length>=2){
        let arr = getInnerArray(data[0], 2);
        // console.log(arr);
        data.unshift(arr);
    }
    return data;
}


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
