const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = "", b = "";
rl.on("line", (line) => {
   if(!a) {
      a = line;
      return;
   }

   if(!b) {
      b = [...line].reverse().join("");

      console.log(b === a ? "YES" : "NO");
      return;
   }

  rl.close();
});
