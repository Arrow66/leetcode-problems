// Last updated: 4/17/2026, 12:40:14 AM
var transpose = function(matrix) {

    let output = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length).fill(0));

    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            output[j][i] = matrix[i][j];
        }
    }
    
    return output;
};