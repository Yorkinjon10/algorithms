/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix: number[][]): number {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    let total = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j],
                        dp[i][j - 1],
                        dp[i - 1][j - 1]
                    ) + 1;
                }

                total += dp[i][j];
            }
        }
    }

    return total;

};

let matrix =
    [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ]
console.log(countSquares(matrix))

// matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]

// countSquares(matrix);
