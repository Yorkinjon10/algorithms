const readline = require("readline")

const rl = readline.createInterface(
   {
      input: process.stdin,
      output: process.stdout
   }
)

let input = [];
rl.on("line", (line) => {
   input.push(Number(line))
   
   if(input.length === 3) {
      rl.close()
   }

})

rl.on("close", () => {
   const max = [input[0] + input[1]* input[2], input[0] * (input[1] + input[2]), input[0] * input[1]* input[2], (input[0] + input[1])* input[2], input[0] + input[1] + input[2]]

   console.log(Math.max(...max))
})

// 1+2*3=7
// 1*(2+3)=5
// 1*2*3=6
// (1+2)*3=9