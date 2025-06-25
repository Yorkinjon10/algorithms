const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let numberOfQuestionaries = 0;

rl.on("line", line => {
   if (!numberOfQuestionaries) {
      numberOfQuestionaries = Number(line);
      return;
   }

   const isHard = line.split(" ").map(Number).some((el) => el === 1);
      
   console.log(isHard ? "HARD" : "EASY");
   rl.close()

})



rl.on("close", () => {

})
 