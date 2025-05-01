const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let hello = ["h", "e", "l", "l", "o"];

rl.on("line", line => {

   for (let i = 0; i < line.length; i++) {
      if (line[i] === hello[0]) {
         hello.shift()
      }
   }
   
   console.log(!hello.length ? "YES" : "NO");
   rl.close()
})

rl.on("close", () => {

})
 