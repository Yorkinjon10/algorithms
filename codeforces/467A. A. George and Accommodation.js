const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let rooms = 0;
let free_space = 0;

rl.on("line", line => {

   if (!rooms) {
      rooms = Number(line);
      return;
   }

   [p, q] = line.split(" ").map(Number);

   free_space += q - p > 1 ? 1 : 0;

   rooms--;
   
   if (rooms === 0) {
      console.log(free_space);
      rl.close()
   }
})

rl.on("close", () => {

})
 