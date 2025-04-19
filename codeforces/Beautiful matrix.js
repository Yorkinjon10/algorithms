const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let lineNum = 0;
let matrix = [];
let res = 0;

rl.on("line", line => {
   matrix[lineNum] = line.split(" ").map(Number);
   lineNum++;

   if(lineNum === 5) {
      for(let i=0; i < matrix.length; i++) {
         for(let j=0; j< matrix.length; j++) {
            if(matrix[i][j] === 1) {
               res = Math.abs(2-i) + Math.abs(2-j);
               break;
            }
         }         
      }
   }
})

rl.on("close", () => {
   console.log(res);
})