const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.on("line", (line) => {
   const [rows, cols] = line.split(" ").map(Number);

   const matrix = [];
   let headEnd = false;

   for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
         if (i % 2 === 0) {
            row.push("#")
         } else {
            if (headEnd && j + 1 === cols) {
               row.push("#");
            } else if (!headEnd && j + 1 === cols) {
               row.push("#")
            }
         }
      }
      if (i % 2 === 1) {
         headEnd = true;
      }
      matrix.push(row)
   }

   console.log(matrix);

   rl.close()
})

rl.on("close", () => { })

// A snake is a pattern on a n by m table. Denote c-th cell of r-th row as (r, c). The tail of the snake is located at (1, 1), then it's body extends to (1, m), then goes down 2 rows to (3, m), then goes left to (3, 1) and so on.