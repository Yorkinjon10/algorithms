const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let friendsQuantity = 0;
let arr = []
rl.on("line", (line) => {
   if(!friendsQuantity) {
      friendsQuantity = Number(line);
      return;
   }

   const gifts = line.split(" ").map(Number);

   for(let i=0; i<gifts.length; i++) {
      arr[gifts[i]-1] = i+1
   }

   console.log(arr.join(" "));
   rl.close();
});

