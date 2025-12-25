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
    const cl_map = { ...map };
    for(let i=0; i<words.length; i++) {
        const isValid = compare(mapper(words[i]), map);
        if (isValid) arr.push(words[i])
    }
    return arr;
}

var group = function (words) {
   const gr_words = [...words];
   
   for (let i = 0; i < words.length; i++) {
      let str = words[i];
      for (let j = i; j < i; j++) {
         str += words[j];
         gr_words.push(str);
      }
   }
   return gr_words;
}

var maxScoreWords = function(words, letters, score) {
    // 1. count letters
    const map = mapper(letters);

    // 2. validate words
   const cl_words = validate(words, map);

   const gp_words = group(cl_words);
   
   const val_words = validate(gp_words, map);

   console.log(val_words);
   
};


let words = ["dog", "cat", "dad", "good"], letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"], score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

maxScoreWords(words, letters, score)

// maxScoreWords(["da", "ac", "aba", "abcc", "cadc"],
//     ["a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d"],
//     [3, 7, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])