const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
   let str = line.replace(/[{}]/g, "").split(",").map(e => e.trim()).filter(e => e !== "");

   let set = new Set([...str])
   console.log(set.size);
   rl.close();
});
