const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = ""

rl.on("line", line => {
   res = [...line];
   res[0] =  res[0].toUpperCase()
   console.log(res.join(""));
})

rl.on("close", () => {
})