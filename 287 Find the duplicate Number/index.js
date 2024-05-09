function findDuplicate(nums){
    let slow = nums[0];
    let fast = nums[0];

    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]

        if(fast == slow)break;
    }

    let slow2 = nums[0];
    while(slow != slow2){
        slow = nums[slow];
        slow2 = nums[slow2]
    }

    return slow;
}

module.exports = findDuplicate;