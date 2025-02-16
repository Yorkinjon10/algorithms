const { unsorted_array } = require("./mock.data");
const { log } = require("console");

const pivot = unsorted_array[20];
const sorted_array = [];

log(pivot)
console.log(new Date().getUTCMilliseconds());

let i = 0;
while(unsorted_array.length != 0 && i < unsorted_array.length) {
   if(pivot >= unsorted_array[i]) {
      sorted_array.unshift(unsorted_array[i]);
   } else {
      sorted_array.push(unsorted_array[i]);
   }
   i++;
}
console.log(sorted_array);

console.log(new Date().getUTCMilliseconds());
