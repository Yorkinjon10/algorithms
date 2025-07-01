const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const word = line;

  const isAllUpper = word === word.toUpperCase();
  const isFirstLowerRestUpper =
    word[0] === word[0].toLowerCase() &&
    word.slice(1) === word.slice(1).toUpperCase();

  if (isAllUpper || isFirstLowerRestUpper) {
    const toggled = word
      .split("")
      .map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    console.log(toggled);
  } else {
    console.log(word);
  }

  rl.close();
});
