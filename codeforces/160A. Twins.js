const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let coinsCount = 0;
rl.on("line", (line) => {
   if(!coinsCount) {
      coinsCount = Number(line);
      return;
   }

   const coins = line.split(" ").map(Number).sort((a, b) => b - a); // sort descending
   const sum = coins.reduce((acc, curr) => acc + curr, 0);

   let your_sum = 0;
   let count = 0;

   for(let i = 0; i < coins.length; i++) {
      your_sum += coins[i];
      count++;
      if(your_sum > sum - your_sum) {
         break;
      }
   }

   console.log(count);
   rl.close();
});
