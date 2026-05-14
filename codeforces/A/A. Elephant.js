const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = 0;
let len = 0;

rl.on("line", line => {
   len = Number(line);
   const steps = Math.ceil(x / 5);
   console.log(steps);

   rl.close()
})
