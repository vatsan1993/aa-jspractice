// Write a function zanyZip that accepts two arrays as arguments.
// The function should return a two dimensional array with subarrays of length 2
// that contain elements at corresponding indices from the input arrays.
// If one of the arrays is shorter than the other,
// then substitute null for the missing elements.



let zanyZip = function (arr1, arr2){
    let newArr = [];
    let length = Math.max(arr1.length, arr2.length);
    for(let i = 0; i< length; i++){
        let temp = [];
        if(i < arr1.length){
            temp.push(arr1[i]);
        }
        else{
            temp.push(null);
        }
        if(i < arr2.length){
            temp.push(arr2[i]);
        }
        else{
            temp.push(null);
        }
        newArr.push(temp);
    }
    return newArr;
}

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
