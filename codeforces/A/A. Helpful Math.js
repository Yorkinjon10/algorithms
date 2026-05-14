const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = 0

rl.on("line", line => {
   res = line.split("+").sort().join("+");
})

rl.on("close", () => {
   console.log(res);
})