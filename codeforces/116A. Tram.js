const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let stops = 0;
let a = 0, b = 0; 
let maxCapacity = 0, currentCapacity = 0;
let lineNum = 0;
rl.on("line", line => {
   if(!stops) {
      stops = Number(line)
      return;
   } 
   [a, b] = line.split(" ").map(Number);

   currentCapacity = currentCapacity + b - a;
   
   if (maxCapacity < currentCapacity) {
      maxCapacity = currentCapacity;
   }

   lineNum++;

   if (lineNum === stops) {
      console.log(maxCapacity);
      rl.close()
   }

})

rl.on("close", () => {

})
 