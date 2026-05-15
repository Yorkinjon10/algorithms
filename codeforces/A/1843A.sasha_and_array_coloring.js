const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let k = null;
let testcases = [
];

let current = {
    size: null
};

rl.on("line", (line) => {
    if (k === null) {
        k = Number(line);
    } else {
        if (current.size !== null) {
            testcases.push({
                size: current.size,
                list: line.split(" ").map(Number).sort((a, b) => a - b)
            })
            current.size = null;
        } else {
            current.size = Number(line);
        }
    }

    if (k === testcases.length) {
        rl.close();
    }
})

rl.on("close", () => {
    for (let i = 0; i < k; i++) {
        let left = 0;
        let right = testcases[i].size - 1;
        let cost = 0;
        let testcase = testcases[i];
        while (left < right) {
            cost += testcase.list[right] - testcase.list[left];
            right--;
            left++;
        }
        console.log(cost);
    }
})

// 1 13 9 3 7 2
// 13 -1 = 12
// 9 - 2 = 7
// 7 - 3 = 4
// 23

