const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = 0
let lineNum = 0;

rl.on("line", line => {
   if(lineNum === 1) {
      for(let i=0; i<line.length-1; i++) {
         if(line[i] == line[i+1]) {
            res++
         }
      }
   }
   lineNum++;
})

rl.on("close", () => {
   console.log(res);
})