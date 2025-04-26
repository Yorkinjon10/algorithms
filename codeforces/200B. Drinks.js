const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let drinks = 0;
rl.on("line", (line) => {
   if(!drinks) {
      drinks = Number(line);
      return;
   }

   const gifts = line.split(" ").map(Number).reduce((acc, curr) => acc + curr , 0);

   console.log(gifts/drinks);
   rl.close();
});

