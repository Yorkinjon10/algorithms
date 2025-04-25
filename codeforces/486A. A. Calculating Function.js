const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
   const n = Number(line);
   
   if(n%2 === 1) {
     const halfSum = Math.floor(n/2) + Math.pow(-1, n)*n;
     console.log(halfSum);
     return;
   }
   
   console.log(n/2);
   rl.close();
});

