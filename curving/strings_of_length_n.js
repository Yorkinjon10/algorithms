const readline = require("readline")

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.on('line', (line) => {
   const n = Number(line);
   
   const results = []

   function backtrack(path) {
      if (path.length === n) {
         results.push(path);
         return; 
      }

      backtrack(path + "0");
      console.log(path);
      
      backtrack(path + "1");
   }

   backtrack("");

   console.log(results)
})

rl.on("close", () => {})