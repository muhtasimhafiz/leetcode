threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let answer = [];

    if (nums.length < 3) {
        return answer;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let [low, high] = [i + 1, nums.length - 1];
        while (low < high) {
            const sum = nums[i] + nums[high] + nums[low];
            if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++;
            } else {
                answer.push([nums[i], nums[low], nums[high]]);
                let lastLow = nums[low];
                let lastHigh = nums[high];
                low++;
                high--;
                while(lastLow == nums[low] && lastHigh == nums[high]) {
                    low++;
                    high--;
                }
            }
        }
    }
    return answer;
};

module.exports = threeSum;
