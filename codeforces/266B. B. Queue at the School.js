const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let time = 0;
let queue = "";

rl.on("line", line => {
   if (!time) {
      time = Number(line.split(" ")[1]);
   } else {
      queue = [...line];
      while (time > 0) {
         for (let i = 0; i < queue.length - 1; i++) {
            if (queue[i] === "B" && queue[i + 1] === "G") {
               queue[i] = "G";
               queue[i + 1] = "B"
               i++;
            }
         }
         time--
      }
      
      console.log(queue.join(""));
      rl.close()
   }
})

rl.on("close", () => {

})
 