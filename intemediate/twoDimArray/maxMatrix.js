function maxInMatrix(matrix) {
    let max = matrix[0][0];
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for(let j = 0; j < row.length; j++){
            let val= row[j];
            if (val > max){
                max = val;
            }
        }
    }
    return max;
}

matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
