const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k = null;
let testcases = [];
let current = {
   n: null,
   binary: [],
};

rl.on("line", (line) => {
   if (k === null) {
      k = Number(line);
      return;
   } else {
      if (current.n !== null) {
         current.binary = line.split("").map(Number);
         testcases.push({
            n: current.n,
            binary: current.binary,
         });
         current.n = null;
         current.binary = [];
      } else {
         current.n = Number(line);
      }
   }
   if (k === testcases.length) {
      rl.close();
   }
});

rl.on("close", () => {
   let result = [];
   for (let i = 0; i < k; i++) {
      let testcase = testcases[i];
      let left = 0;
      let right = testcases[i].n - 1;
      let count = 0;
      for (let j = 0; j < testcase.n / 2; j++) {
         if (testcase.binary[left] !== testcase.binary[right]) {
            count += 2;
            left++;
            right--;
         }
      }
      result.push(`${testcase.n - count}`);
   }
   console.log(result.join("\n"));
});

// input:
// 9
// 3
// 100
// 4
// 0111
// 5
// 10101
// 6
// 101010
// 7
// 1010110
// 1
// 1
// 2
// 10
// 2
// 11
// 10
// 1011011010

// output: 
// 1
// 2
// 5
// 0
// 3
// 1
// 0
// 2
// 4
