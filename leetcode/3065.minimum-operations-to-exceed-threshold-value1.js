var minOperations = function(nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

console.log(minOperations([2, 11, 10, 1, 3], 10))
