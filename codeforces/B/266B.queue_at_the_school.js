const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = null, t = null;
let queue = [];

rl.on("line", (line) => {
    if (n === null) {
        [n, t] = line.split(" ").map(Number);
    } else {
        queue = line.split("");
    }

    if (queue.length > 0) {
        rl.close();
    }
});

rl.on("close", () => {
    for (let i = 0; i < t; i++) {
        for (let j = 0; j < n; j++) {
            if (queue[j] === "B" && queue[j + 1] === "G") {
                let temp = queue[j + 1];
                queue[j + 1] = queue[j];
                queue[j] = temp;
                j++;
            }
        }
    }
    console.log(queue.join(""));
})
