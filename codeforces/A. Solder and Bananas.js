const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let x = 0;

rl.on("line", line => {
   [k, n, w] = line.split(" ").map(Number);

   const totalDollars = (k + k*w)* w /2;
   if(totalDollars > n) {
      console.log(totalDollars - n);
   } else console.log(0);

   rl.close()
})
