const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k = null;
let testcases = [];
let current = {
   n: null,
   list: []
};

rl.on("line", (line) => {
   if (k === null) {
      k = Number(line);
   } else {
      if (current.n !== null) {
         current.list = line.split(" ").map(Number);

         testcases.push({
            n: current.n,
            list: current.list
         });

         current = {
            n: null,
            list: []
         };
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
      let left = 0;
      let right = testcases[i].n - 1;
      let current = [];
      while (left < right) {
         current.push(testcases[i].list[left]);
         current.push(testcases[i].list[right]);
         right--;
         left++;
      }
      if (left === right) {
         current.push(testcases[i].list[left]);
      }
      result.push(current);
   }
   
  console.log(result.map((el) => el.join(" ")).join("\n"));
  
});
// Input:
// 6
// 7
// 3 4 5 2 9 1 1
// 4
// 9 2 7 1
// 11
// 8 4 3 1 2 7 8 7 9 4 2
// 1
// 42
// 2
// 11 7
// 8
// 1 1 1 1 1 1 1 1

// Output:
// 3 1 4 1 5 9 2 
// 9 1 2 7 
// 8 2 4 4 3 9 1 7 2 8 7 
// 42 
// 11 7 
// 1 1 1 1 1 1 1 1 
