
var findMatrix = function(nums) {
    const freq = new Map();
    const result = [];

    for (let num of nums) {
        let count = freq.get(num) || 0;

        if (!result[count]) {
            result[count] = [];
        }

        result[count].push(num);
        freq.set(num, count + 1);
    }

    return result;
};

console.log(findMatrix([1, 2, 3, 3, 4, 5]))

