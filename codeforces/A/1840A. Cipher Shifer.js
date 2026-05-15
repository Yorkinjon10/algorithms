const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let k = null;
let testcases = [];
let current = {
    size: null,
};

rl.on("line", (line) => {
    if (k === null) {
        k = Number(line);
    } else {
        if (current.size !== null) {
            testcases.push({
                size: current.size,
                list: line,
            });
            current.size = null;
        } else {
            current.size = Number(line);
        }
    }
    if (k === testcases.length) rl.close();
});

rl.on("close", () => {
    for (let i = 0; i < k; i++) {
        let testcase = testcases[i];
        let left = testcase.list[0];
        let right = "";
        let decrypted_text = "";
        for (let j = 0; j < testcase.size; j++) {
            if (testcase.list[j] === left && right !== left) {
                decrypted_text += testcase.list[j];
                right = left;
            } else if (right === left & testcase.list[j] === left) {
                left = testcase.list[j + 1];
                right = "";
            }
        }
        console.log(decrypted_text);
    }
});

//  3
// 8
// abacabac
// 5
// qzxcq
// 20
// ccooddeeffoorrcceess

