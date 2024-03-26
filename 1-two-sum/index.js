function twoSum(nums, target) {
    const numMap = {};
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    return []; // No solution found
}




module.exports = twoSum;