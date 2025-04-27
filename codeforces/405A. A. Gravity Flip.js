const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sortingNum = 0;
rl.on("line", (p) => {
   if(!sortingNum) { 
      sortingNum = Number(p)
      return;
  } else {
   const nums = p.split(" ").map(Number).sort((a, b) => a-b);
    console.log(nums.join(" "));
  }
  rl.close();
});
