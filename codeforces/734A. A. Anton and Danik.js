const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineNum = 0;
rl.on("line", (line) => {
   if(lineNum++ === 0) return;

  const anton = line.split('').filter(ch => ch === 'A').length;

  if(anton === line.length / 2) {
   console.log("Friendship");
   return;
  } else if(anton > line.length  /2 ) {
   console.log("Anton");
   return;
  }

  console.log("Danik");

  rl.close();
});
