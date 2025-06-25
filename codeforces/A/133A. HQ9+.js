const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (p) => {
  if (p.includes('H') || p.includes('Q') || p.includes('9')) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  rl.close();
});
