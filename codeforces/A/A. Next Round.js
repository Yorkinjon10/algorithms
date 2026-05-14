const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let lineNum = 0;
let n = 0;
let k = 0;
let res = 0;

rl.on("line", line => {
   if (lineNum === 0) {
      [n, k] = line.split(" ").map(Number);
      lineNum++;
      return;
   }

   const a = line.split(" ").map(Number);

   res = a.filter((l, i) => l >= a[k-1] && l > 0).length
})

rl.on("close", () => {
   console.log(res);
})