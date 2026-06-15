const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let rowOfOne = -1;
let colOfOne = -1;
let currentRow = 0;

rl.on("line", (line) => {
    const numbers = line.split(" ").map(Number);
    const foundIndex = numbers.indexOf(1);

    if (foundIndex !== -1) {
        rowOfOne = currentRow;
        colOfOne = foundIndex;
        rl.close();
    }
    currentRow++;
});

rl.on("close", () => {
    // The center of a 5x5 matrix is at (2, 2)
    const moves = Math.abs(2 - rowOfOne) + Math.abs(2 - colOfOne);
    console.log(moves);
});
