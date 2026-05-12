const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k = null;
let nums = [];

rl.on("line", (line) => {
   if (k == null) {
      k = Number(line);
      return;
   } else {
      nums = line.split(" ").map(Number);
   }

   if (nums.length === k) {
      rl.close();
   }
   return;
});

rl.on("close", () => {
   let sereja = 0;
   let dima = 0;

   let left = 0;
   let right = nums.length - 1;

   for (let turn = 0; turn < k; turn++) {
      let chosen;

      if (nums[left] > nums[right]) {
         chosen = nums[left];
         left++;
      } else {
         chosen = nums[right];
         right--;
      }

      if (turn % 2 === 0) {
         sereja += chosen;
      } else {
         dima += chosen;
      }
   }

   console.log(sereja + " " + dima)
});

// 4
// 4 1 2 10
// 12 5


// 7
// 1 2 3 4 5 6 7
// 16 12

// 7
// 1 2 3 4 5 6 7

// ans: 16 12
