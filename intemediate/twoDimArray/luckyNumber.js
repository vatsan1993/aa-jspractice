// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix)
// and returns all lucky numbers in any order.
// A lucky number is the minimum element in its row and the maximum in its column.

let getRowMin = function(matrix, i){
    let row = matrix[i];
    return Math.min(...row);
}
let getColMax = function(matrix, i){
    let col = [];
    for(let j = 0; j < matrix.length; j++){
        let val = matrix[j][i]
        col.push(val);
    }
    return Math.max(...col);
}
let luckyNumbers = function(matrix) {
    let result = [];
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          let val = matrix[i][j];
          let min = getRowMin(matrix, i);
          let max = getColMax(matrix, j);
          if(min == val && max == val){
              result.push(val);
          }
      }
  }
  return result;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
