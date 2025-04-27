const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
    const [a, b] = line.split(" ").map(BigInt);

    if (a === 10 || b === 10 || a + b === 10)
    return true;
else
    return false;


  rl.close();
});
