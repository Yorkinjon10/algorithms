const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let lineNum = 0;
let nCoords = 0;
let x = 0, y = 0, z = 0;
rl.on("line", line => {
   if(lineNum !== 0) {
      let tCoords = line.split(" ").map(Number);
      x += tCoords[0];
      y += tCoords[1];
      z += tCoords[2];
   } else {
      nCoords = Number(line);
   }

   lineNum++;

   if(nCoords === lineNum - 1) {
      if(x===0 && y===0 && z===0) {
         console.log("YES");
      } else {
         console.log("NO");
      }
   }
})

rl.on("close", () => {

})
 