function quickSort(arr) {
   if (arr.length <= 1) {
     return arr;
   }
 
   const pivot = arr[Math.floor(arr.length / 2)];
 
   const left = arr.filter((el) => el < pivot);  
   const right = arr.filter((el) => el > pivot); 
   const middle = arr.filter((el) => el === pivot); 
 
   console.log(left, right, middle);
   return [...quickSort(left), ...middle, ...quickSort(right)];
 }
 
 // Example usage
 const unsortedArray = [8, 3, 7, 6, 2, 5];
 console.log(quickSort(unsortedArray));
 