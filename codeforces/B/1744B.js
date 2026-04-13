const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tc = null;
let done = 0;
let step = 0;

const result = [];
let curr = {
  q: 0,
  arr: [],
  queries: [],
};

rl.on("line", (line) => {
  line = line.trim();

  if (tc === null) {
    tc = Number(line);
    return;
  }

  if (step === 0) {
    const [n, q] = line.split(" ").map(Number);
    curr.q = q;
    step = 1;
    return;
  }

  if (step === 1) {
    curr.arr = line.split(" ").map(Number);
    step = 2;
    return;
  }

  curr.queries.push(line.split(" ").map(Number));

  if (curr.queries.length === curr.q) {
    result.push({
      q: curr.q,
      arr: [...curr.arr],
      queries: curr.queries.map((x) => [...x]),
    });

    done++;

    if (done === tc) {
      rl.close();
      return;
    }

    curr = {
      q: 0,
      arr: [],
      queries: [],
    };
    step = 0;
  }
});

rl.on("close", () => {
  const answers = [];

  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let j = 0; j < result[i].arr.length; j++) {
      const num = result[i].arr[j];
      sum += num;

      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    const currAnswers = [];

    for (let j = 0; j < result[i].queries.length; j++) {
      const [type, x] = result[i].queries[j];

      if (type === 0) {
        sum += evenCount * x;

        if (x % 2 !== 0) {
          oddCount += evenCount;
          evenCount = 0;
        }
      } else {
        sum += oddCount * x;

        if (x % 2 !== 0) {
          evenCount += oddCount;
          oddCount = 0;
        }
      }

      currAnswers.push(sum);
    }

    answers.push(currAnswers);
  }

  for (const arr of answers) {
    for (const val of arr) {
      console.log(val);
    }
  }
});