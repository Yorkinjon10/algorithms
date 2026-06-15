const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = null;
let axes = [];


rl.on("line", (line) => {
    if (n === null) {
        n = Number(line);
    } else {
        axes.push(line.split(" ").map(Number));
    }
    if (axes.length === n) {
        rl.close();
    }
});

rl.on("close", () => {

    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;

    for (let i = 0; i < axes.length; i++) {
        sumX += axes[i][0];
        sumY += axes[i][1];
        sumZ += axes[i][2];
    }
    console.log(!sumX && !sumY && !sumZ ? "YES" : "NO");
});
