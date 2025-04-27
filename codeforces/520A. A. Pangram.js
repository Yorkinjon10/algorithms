const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let len = 0;
rl.on("line", (line) => {
   if(!len) { 
      len = Number(line)
      return;
  } else {  
   const set = new Set(line.toLowerCase().split(""))

   if(set.size >= 26) {
      console.log("YES");
   } else {
      console.log("NO");
   }
  }
  rl.close();
});
