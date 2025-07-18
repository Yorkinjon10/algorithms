const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let n = 0;
let k = 0;
let res = 0;

rl.on("line", line => {
   [n, k] = line.split(" ").map(Number);

   res = Math.floor(n * k / 2);
})

rl.on("close", () => {
   console.log(res);
})