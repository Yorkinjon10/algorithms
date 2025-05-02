const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const map = {
   "Tetrahedron": 4,
   "Cube": 6,
   "Octahedron": 8,
   "Dodecahedron": 12,
   "Icosahedron": 20
}

rl.on("line", (line) => {
   input.push(line)

   if (Number(input[0]) + 1 === input.length) {
      let faces = 0;
      for (let i = 1; i < input.length; i++) {
         faces += map[input[i]];
      }
      console.log(faces);
      
      rl.close();
   }
});
