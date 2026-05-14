const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k = null;
let current = {
  size: null,
};
let testcases = [];

rl.on("line", (line) => {
  if (k === null) {
    k = Number(line);
  } else {
    if (current.size === null) {
      current.size = Number(line);
    } else {
      testcases.push({
        size: current.size,
        list: line.split(" ").map(Number),
      });

      current.size = null;
    }
  }

  if (k === testcases.length) {
    rl.close();
  }
});

rl.on("close", () => {
  let result = [];

  for (let i = 0; i < k; i++) {
    const { size, list } = testcases[i];

    let seats = Array(size + 2).fill(false);
    let isValid = true;

    for (let j = 0; j < size; j++) {
      const seat = list[j];

      if (j === 0) {
        seats[seat] = true;
        continue;
      }

      if (!seats[seat - 1] && !seats[seat + 1]) {
        isValid = false;
        break;
      }

      seats[seat] = true;
    }

    result.push(isValid ? "YES" : "NO");
  }

  console.log(result.join("\n"));
});