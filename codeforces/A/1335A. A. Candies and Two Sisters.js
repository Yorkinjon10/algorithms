const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const test_cases = [];
let num_test_cases = 0;

rl.on("line", (line) => {
   if (!num_test_cases) {
      num_test_cases = Number(line);
      return;
   }


   test_cases.push(Number(line));

   if (test_cases.length === num_test_cases) {
      rl.close();
   };
});

rl.on("close", () => {
   let results = [];

   for (let i = 0; i < test_cases.length; i++) {
      if (test_cases[i] % 2 === 0) {
         results.push(test_cases[i] / 2 - 1);
      } else {
         results.push(Math.floor(test_cases[i]/2))
      }
   }
   console.log(results.join("\n"));
   
});
