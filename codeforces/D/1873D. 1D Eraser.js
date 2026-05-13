const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let index = 0;
const t = Number(input[index++]);

let results = [];

for (let i = 0; i < t; i++) {
  const n = Number(input[index++]);
  const k = Number(input[index++]);
  const s = input[index++];

  let count = 0;

  for (let pos = 0; pos < n; pos++) {
    if (s[pos] === "B") {
      count++;
      pos += k - 1;
    }
  }

  results.push(count);
}

console.log(results.join("\n"));