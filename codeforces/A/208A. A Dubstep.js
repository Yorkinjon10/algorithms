const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
   const hiddenWord = line.split("WUB").filter((el) => el.length > 0)

   console.log(hiddenWord.join(" "));
   rl.close();
});

