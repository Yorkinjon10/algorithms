const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 2) {
        rl.close();
    }
});

rl.on("close", () => {
    const n = Number(lines[0]);
    const solders = lines[1].split(" ").map(Number);

    const maxNum = Math.max(...solders);
    const minNum = Math.min(...solders);

    const maxIndex = solders.indexOf(maxNum);
    const minIndex = solders.lastIndexOf(minNum); // Important: use lastIndexOf for min

    let moves = maxIndex + (n - 1 - minIndex);

    if (maxIndex > minIndex) {
        moves -= 1; // Because after moving max, min shifts left
    }

    console.log(moves);
});
