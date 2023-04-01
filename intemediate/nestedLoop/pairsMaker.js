// Write a function pairsMaker(arr) that takes in a an
// array as an argument. The function should return a 2D
// array where the subarrays represent unique pairs of
//  element from the input array.

let pairsMaker = function (array){
    let uniques = []
    for (let i=0; i< array.length; i++){
        let val1 = array[i];
        for (let j= i + 1 ;  j< array.length ; j++ ){
            let val2 = array[j];
            let temp = [val1 , val2];
            uniques.push(temp);
        }
    }
    return uniques;
}
console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
