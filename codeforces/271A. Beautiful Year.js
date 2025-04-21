const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

rl.on("line", line => {
   let year = Number(line) + 1;

   while (!isUnique(year)) {
      year++;
   }
      
   console.log(year);
   rl.close()

})

function isUnique(year) {
   let set = new Set([...year.toString()]);
   return set.size === 4;
}

rl.on("close", () => {

})
 