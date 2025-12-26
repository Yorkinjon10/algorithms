/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var mapper = function(arr) {
    const map = new Map();
    for(let i=0; i<arr.length; i++) {
        if(map[arr[i]]) { map[arr[i]]++; } 
        else { map[arr[i]] = 1 }
    }
    return map;
}

var compare = function (arr1, map) {
   for (let el of Object.entries(arr1)) {
      if(!map[el[0]]) return false;
      if (map[el[0]] < el[1]) {
         return false;
      }
    }
    return true;
}

var validate = function(words, map) {
    const arr = [];
    for(let i=0; i<words.length; i++) {
       const isValid = compare(mapper(words[i]), map);
       
        if (isValid) arr.push(words[i])
    }
    return arr;
}

var group = function (words) {
   const gr_words = [[]];
   
   for (const item of words) {
    const size = gr_words.length;
    for (let i = 0; i < size; i++) {
      gr_words.push([...gr_words[i], item]);
    }
   }
   
   return gr_words;
}

var flatten = function (words) {
   const cl_words = [];
   for (let i = 0; i < words.length; i++) {
      cl_words.push(words[i].reduce((acc, curr) => acc + curr ,""))
   }
   return cl_words;
}

var letterSum = function (score) {
   const map = new Map();
   for (let i = 0; i < score.length; i++) {
      map[String.fromCharCode(97 + i)] = score[i];
   }

   return map;
}
var findSum = function (words, map) {
   const sum = [];
   for (let i = 0; i < words.length; i++) {
      let val = 0;
      
      for (let j = 0; j < words[i].length; j++) {
         val += map[words[i][j]];
      }
      sum.push(val);
   }
   return sum;
}

var maxScoreWords = function(words, letters, score) {
    // 1. count letters
    const map = mapper(letters);

    // 2. validate words
   const cl_words = validate(words, map);

   const gp_words = group(cl_words);

   console.log(gp_words);
   
   const fl_words = flatten(gp_words);
   
   const val_words = validate(fl_words, map);

   const letter_sum = letterSum(score);

   const sums = findSum(val_words, letter_sum);
   console.log(sums);
   console.log(Math.max(...sums));
   
   
   return sums.length > 0 ? Math.max([...sums]) : 0;
};


// let words = ["dog", "cat", "dad", "good"], letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"], score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// maxScoreWords(words, letters, score)

maxScoreWords(["da", "ac", "aba", "abcc", "cadc"],
    ["a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d"],
    [3, 7, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// maxScoreWords(["dog", "cat", "dad", "good"], ["a", "a", "c", "d", "d", "d", "g", "o", "o"], [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// maxScoreWords(["xxxz", "ax", "bx", "cx"], ["z", "a", "b", "c", "x", "x", "x"], [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10])

// maxScoreWords(["leetcode"], ["l","e","t","c","o","d"], [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0])