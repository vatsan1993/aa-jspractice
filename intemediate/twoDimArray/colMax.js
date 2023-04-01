// Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
// and returns an array containing the maximum value in each column.
// The array length should be equal to the number of columns,
// such that returnArray[i] is equal to the max value in the ith column.

let maxColumn = function maxColumn(matrix) {
    let arr = [];
    for(let i = 0; i < matrix[0].length; i++){
        let max = matrix[0][i];
        for (let j= 0; j < matrix.length; j++){
            let val = matrix[j][i];
            if(val > max){
                max = val;
            }
        }
        arr.push(max);
    }
    return arr;
  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(maxColumn(matrix)); // [12, 19, 21]

