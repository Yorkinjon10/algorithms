const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let streak = 1;

  for (let i = 1; i < line.length; i++) {
    if (line[i] === line[i - 1]) {
      streak++;
      if (streak >= 7) {
        console.log("YES");
        rl.close();
        return;
      }
    } else {
      streak = 1;
    }
  }

  console.log("NO");
  rl.close();
});
