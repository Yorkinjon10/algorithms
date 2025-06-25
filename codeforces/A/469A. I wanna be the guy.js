const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 3) {
        rl.close();
    }
});

rl.on("close", () => {
    const n = Number(lines[0]);

    const x = lines[1].split(" ").slice(1).map(Number);
    const y = lines[2].split(" ").slice(1).map(Number);

    const merged = new Set([...x, ...y]);

    for (let i = 1; i <= n; i++) {
        if (!merged.has(i)) {
            console.log("Oh, my keyboard!");
            return;
        }
    }
    console.log("I become the guy.");
});
