/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target, start = 0, end = nums.length-1){
    if(start>=end) {
        if(nums[start]==target) return start;
        if(start >= nums.length) start = nums.length-1
        if(nums[start] > target) return start
        return start+1;
    };
    let mid = Math.ceil((start+end)/2);
    if(nums[mid] === target) return mid;
    if(nums[mid] > target) {
        return searchInsert(nums, target, start, mid-1)
    };
    if(nums[mid] < target) {
        return searchInsert(nums, target, mid+1, end);
    }
}

module.exports = searchInsert;