const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let lineNum = 0;
let str1 = [];
let str2 = [];
let res = 0

rl.on("line", line => {
   if(lineNum === 0) {
      str1 = line.split("");
   } else {
      str2 = line.split("");
   }
   const len = str1.length;

   if(lineNum == 1) 
   for(let i=0; i < len; i++) {
      if(str1[i].toLowerCase().charCodeAt() > str2[i].toLowerCase().charCodeAt()) {
         res = 1;
         break;
      } else if(str1[i].toLowerCase().charCodeAt() < str2[i].toLowerCase().charCodeAt()) {
         res = -1;
         break;
      } 
   }

   lineNum++
})

rl.on("close", () => {
   console.log(res);
})