const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.on("line", (line) => {
   const num = Number(line);

   function printNums(i) {
      if (i > num) {   // ✅ base case: stop when i > num
         return;
      }
      
      console.log(i);
      printNums(i + 1); // recursive call
   }

   printNums(1); // start from 1
});
