const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let x = 0;

rl.on("line", line => {
   let str = line.split("");
   let uCase = 0, lCase = 0;

   for(let i=0; i<str.length; i++) {
      if(str[i].charCodeAt() > 96) {
         lCase++;
      } else {
         uCase++;
      }
   }

   if(lCase < uCase) {
      str = str.join("").toUpperCase()
   } else {
      str = str.join("").toLowerCase()
   }

   console.log(str);
   rl.close()
})
 