const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i=0;

rl.on("line", (line) => {
  const digit = Number(line);
  let res = "NO";

  while(i <= digit) {
   if(isLucky(i)) {
      if(digit%i === 0) {
         res = "YES"
      }
   }
   i++;
  }

  console.log(res);
  rl.close();
});

const isLucky = (num) => {
   const set = new Set([...num.toString()])

   if(set.size === 2 && set.has("4") && set.has("7")) {
      return true;
   }

   if(set.size === 1 && (set.has("4") || set.has("7"))) {
      return true;
   }

   return false;
}