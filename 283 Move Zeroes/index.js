function moveZeroes(nums) {
    let j = nums.length - 1
    for (let i = 0;i <= j ; i++) {

        while(nums[i] == 0 && j!=i) {
            nums.splice(i,1);
            nums.push(0)
            j--
        }
    }
    return nums;
}

module.exports = moveZeroes;