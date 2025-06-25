const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let steps = 0;
let currSum = 0;
rl.on("line", (line) => {
   let num = Number(line);

   steps += Math.floor(num / 100);

   num = num - steps * 100

   currSum = Math.floor(num / 20);
   steps += currSum

   num = num - currSum * 20;

   currSum = Math.floor(num / 10);
   steps += currSum;

   num = num - currSum * 10;
   
   currSum = Math.floor(num / 5);
   steps += currSum;

   num = num - currSum * 5;

   currSum = Math.floor(num / 1);
   steps += currSum;

   num = num - currSum * 1;
   
   console.log(steps);

  rl.close();
});
