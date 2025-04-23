const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const luckyDigits = line.split('').filter(ch => ch === '4' || ch === '7').length;

  const isLucky = luckyDigits.toString().split('').every(ch => ch === '4' || ch === '7');

  console.log(isLucky ? "YES" : "NO");
  rl.close();
});
