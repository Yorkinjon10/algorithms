const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 5) {
    const [k, l, m, n, d] = input;

    let damaged = 0;

    for (let i = 1; i <= d; i++) {
      if (i % k === 0 || i % l === 0 || i % m === 0 || i % n === 0) {
        damaged++;
      }
    }

    console.log(damaged);
    rl.close();
  }
});
