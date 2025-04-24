const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {

   const n = Number(line);
   const evenCount = Math.floor(n / 2);
   const oddCount = Math.ceil(n / 2);
   
   const sum = evenCount * (evenCount + 1) - oddCount * oddCount;
   
   console.log(sum);
   rl.close();
});

