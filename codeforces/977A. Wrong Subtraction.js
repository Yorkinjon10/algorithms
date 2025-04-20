const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

rl.on("line", line => {
   let [val, k] = line.split(" ").map(Number);

   while(k > 0) {
      if(val%10 === 0) {
         val /=10;
      } else {
         val--;
      }

      k--;
   }
   
   console.log(val);
   rl.close()
})
 