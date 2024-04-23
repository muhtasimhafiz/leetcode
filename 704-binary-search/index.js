function search(nums, target, start=0, end=nums.length-1){
    if(start > end) return -1;
    let pivot = Math.floor((start + end)/2)
    if(nums[pivot] === target) return pivot;
    if(nums[pivot] > target) return search(nums, target, start, pivot - 1)
    if(nums[pivot] < target) return search(nums, target, pivot + 1, end)
}

module.exports = search;

