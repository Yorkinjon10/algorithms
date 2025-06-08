const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
   const set = new Set(line.split(" "));

   console.log(4- set.size);
   rl.close();
});
