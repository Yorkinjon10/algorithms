const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let res = ""
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

rl.on("line", line => {
   line = line.toLowerCase();

   res = line.split("").filter((i) => !vowels.includes(i));

   res = res.reduce((acc, curr) => acc + '.' + curr, '')
})

rl.on("close", () => {
   console.log(res);
})