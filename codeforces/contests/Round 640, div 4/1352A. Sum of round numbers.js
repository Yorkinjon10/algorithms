const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let testcases = [

];

rl.on("line", (line) => {
   if (n === null) {
      n = Number(line);
   } else {
      testcases.push(Number(line));
   }
   
   if (n === testcases.length) {
      rl.close();
   }
});

rl.on("close", () => {
   console.log(testcases);
   for (let i = 0; i < n; i++) {
      let num = testcases[i];
      let result = [];
      
   }
});

// input

// 5
// 5009
// 7
// 9876
// 10000
// 10


// output

// 2
// 5000 9
// 1
// 7 
// 4
// 800 70 6 9000 
// 1
// 10000 
// 1
// 10 
