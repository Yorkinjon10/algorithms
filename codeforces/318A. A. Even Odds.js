const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
   const [n, k] = line.split(" ").map(BigInt);

   const half = (n + 1n) / 2n; // Correct ceil(n/2)

   let result;
   if (k <= half) {
      result = 2n * (k - 1n) + 1n;
   } else {
      result = 2n * (k - half);
   }

   console.log(result.toString());
   rl.close();
});
