function threeSumClosest(nums, target){
    let result = Infinity;
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let l = i+1;
        let r=nums.length-1;
        while(r>l){
            let sum = nums[r] + nums[l] + num;
            if(sum == target) return target;
            if(Math.abs(target - sum) < Math.abs(target - result)) result = sum;
            if(sum > target) {
                r--;
                continue;
            }
            l++;
            continue;
        }
    }
    return result;
}

module.exports = threeSumClosest;