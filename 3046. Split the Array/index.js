function isPossibleToSplit(nums){
    let hashmap = {};

    for(let i = 0; i < nums.length; i++){
        if(hashmap[nums[i]]){
            hashmap[nums[i]]++;
        }else{
            hashmap[nums[i]] = 1;
        }

        if(hashmap[nums[i]] > 2){
            return false;
        }
    }

    return true;
}

module.exports = isPossibleToSplit;