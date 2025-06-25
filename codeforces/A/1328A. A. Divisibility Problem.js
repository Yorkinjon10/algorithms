const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numOfTC = 0;
let inputLines = [];
let res = [];

rl.on("line", (line) => {
   if (!numOfTC) {
      numOfTC = Number(line);
   } else {
      inputLines.push(line);
      if (inputLines.length === numOfTC) {
         rl.close();
      }
   }
});

rl.on("close", () => {
   for (const line of inputLines) {
      const [a, b] = line.split(" ").map(Number);
      const moves = handleDivision(a, b);
      res.push(moves);
   }

   console.log(res.join("\n")); // Output answers
});

function handleDivision(a, b) {
   if (a % b === 0) return 0;
   return b - (a % b);
}

