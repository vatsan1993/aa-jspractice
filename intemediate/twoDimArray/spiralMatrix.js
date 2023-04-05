function spiralOrder(matrix) {
    // if the matrix is empty or null
    if(matrix == null || matrix.length == 0){
        return [];
    }
    // array that hold the result array.
    let result = [];

    // variables to track top, left , bottom and right
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    // loop till we reach boundaries
    while(top <= bottom && left <= right){

        // move right
        for(let i = left; i <= right; i++){
            result.push(matrix[top][i]);
        }
        top++; // mowing to next row;

        // moving down
        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--; // moving to previous column

        // moving left
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        // moving up
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
  }

  matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
