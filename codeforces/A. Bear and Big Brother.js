const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = 0

rl.on("line", line => {
   let [a, b] = line.split(" ").map(Number);

   while(a <= b) {
      a = a * 3;
      b = b * 2;

      res++;
   }
   console.log(res);
})

rl.on("close", () => {
})