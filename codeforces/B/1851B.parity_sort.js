const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k = null;
let testcases = [];
let current = {
    size: null,
}

rl.on("line", (line) => {
    if (k === null) {
        k = Number(line);
    } else {
        if (current.size !== null) {
            testcases.push({
                size: current.size,
                list: line.split(" ").map(Number)
            })
            current.size = null;
        } else {
            current.size = Number(line);
        }
    }

    if (k === testcases.length) {
        rl.close();
    }
});

function findMin(list, type) {
    let min = Infinity;
    let index = 0;
    for (let i = 0; i < list.length; i++) {
        if (type === "EVEN") {
            if (list[i] % 2 === 0 && list[i] < min) {
                min = list[i];
                index = i;
            }
        } else {
            if (list[i] % 2 !== 0 && list[i] < min) {
                min = list[i];
                index = i;
            }

        }
    }
    return { min, index };
}

rl.on("close", () => {
    console.log(testcases)
    for (let i = 0; i < k; i++) {
        let testcase = testcases[i];
        let left = 0;
        let right = testcase.size - 1;

        while (left < right) {
            let temp = testcase.list[left];
            let { min, index } = findMin(testcase.list.slice(left), testcase.list[left] % 2 ? "ODD" : "EVEN");
            testcase.list[left] = testcase.list[index];
            testcase.list[index] = temp;
            left++;
            right--;
        }
        console.log(testcase);
    }
});

// 11 9 3 5 
// 3 9 11 5 
// 3 5 11 9
// 3 5 9 11
//
// We must look for the rightest smallest odd or even corresponed pair of the current value.
