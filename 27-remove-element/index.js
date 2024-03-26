function removeElement(nums, val) {
    let swap_index = nums.length-1;
    let count = nums.length;
    for (let i = 0; i <= swap_index; i++) {
        if (nums[i] == val) {
            count--;
            nums[i] = '_';
            while (nums[swap_index] == val) {
                nums[swap_index] = '_';
                count--;
                swap_index--;
                if (swap_index < 0) return count;
            };
            nums[i] = nums[swap_index];
            nums[swap_index] = '_';
            swap_index--;
        }
    }
    return count;
}

module.exports = removeElement;