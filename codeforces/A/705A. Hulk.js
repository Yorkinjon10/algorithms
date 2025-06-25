const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const love = "I love"
const hate = "I hate"

rl.on("line", (line) => {
   let num = Number(line);
   let i=1;
   let res = ""

   while(i<=num) {
      if(i%2 === 1 && i + 1 <= num) {
         res += hate + " that "
      } else if(i%2 === 1) {
         res += hate + " it"
      } 

      if(i%2 === 0 && i + 1 <= num) {
         res += love + " that "
      } else if(i%2 === 0) {
         res += love + " it"
      }

      i++;
   }

   console.log(res);

   rl.close();
});
