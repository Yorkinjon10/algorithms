const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = ""
let res = []
rl.on("line", (line) => {
   if(!a) {
      a = line
      return;
   }

   let b = line;

   const splitA = a.split("");
   const splitB = b.split("");

   for(let i=0; i<splitA.length; i++) {
      if(splitA[i] === splitB[i]) {
         res.push("0");
      } else {
         res.push("1");
      }
   }
   console.log(res.join(""));

   rl.close();
});
