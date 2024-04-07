function fourSum(nums, target){
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length;i++){
        if(i!=0 && nums[i]==nums[i-1]) continue;
        for(let j = i+1; j < nums.length;j++){
            if(j > i+1  && nums[j] == nums[j-1]) continue;
            let left = j+1;
            let right = nums.length - 1
            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if( sum ===  target){
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while(left< right&& nums[left] == nums[left-1]) left++;
                    while(left<right && nums[right] == nums[right+1]) right--;
                    continue;;
                }

                if(sum < target){
                    left++;
                    continue;
                }
                right--;
            }
        }
    }
    return result;
}


module.exports = fourSum;