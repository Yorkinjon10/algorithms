const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let friendsNum = 0, fenceHeight = 0;
let friendsHeights = []; 

rl.on("line", line => {
   if(!friendsNum) {
      [friendsNum, fenceHeight] = line.split(" ").map(Number);
   } else {
      friendsHeights = line.split(" ").map(Number);

      const twos = friendsHeights.filter((h) => h > fenceHeight).length;

      console.log(twos*2 + friendsHeights.length - twos);
      
      rl.close("");
   }

})

rl.on("close", () => {

})
 