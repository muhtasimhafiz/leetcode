function removeDuplicates(nums) {
    if (nums.length < 3) return nums.length;
    let count = 1;
    let prev = nums[0];
    let i = 1;
    let dashed_index = null;
    let res = 1;
    while (i < nums.length) {
        if (nums[i] === prev && count == 2) {
            nums[i] = '_';

            if (!dashed_index) {
                dashed_index = i;
            }
            i++
            continue;
        }

        if (nums[i] == prev) {
            count++
            res++
            if (dashed_index != null) {
                [nums[dashed_index], nums[i]] = [nums[i], nums[dashed_index]]
                dashed_index++;
                if (nums[dashed_index] != '_') {
                    dashed_index = null;
                }
            }
            i++;
            continue;
        }

        count = 1;
        res++
        prev = nums[i];
        if (dashed_index != null) {
            [nums[dashed_index], nums[i]] = [nums[i], nums[dashed_index]]
            dashed_index++;
            if (nums[dashed_index] != '_') {
                dashed_index = null;
            }
        }
        i++;
    }
    return res;
}

// 1,1,1,2,2,3
//1,2,3

//1,1,1,1,2,3,3,3,4
//1,

module.exports = removeDuplicates;