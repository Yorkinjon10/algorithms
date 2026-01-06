/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var dp = Array.from({ length: rows }, function () { return Array(cols).fill(0); });
    var total = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                }
                else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                total += dp[i][j];
            }
        }
    }
    return total;
};
var matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
];
console.log(countSquares(matrix));
// matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// countSquares(matrix);
