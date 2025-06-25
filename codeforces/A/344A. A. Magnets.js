const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numOfMagnets = 0;
let count = 0;
let acc = "";
rl.on("line", (line) => {
   if(!numOfMagnets) {
      numOfMagnets = Number(line);
      return;
   }

   numOfMagnets--;

   if(!acc) {
      acc = line;
      count++;
   }

   if(acc === line) {
   } else {
      count++;
      acc = line;
   }

   if(numOfMagnets === 0) {
      console.log(count);
      rl.close();
   }
});

