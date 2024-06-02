function majorityElement(nums){
    let candidate = null;
    let count = 0;

    for(i of nums){
        if(count == 0) candidate = i;
        if(i == candidate){
            count++
        } else {
            count --;
        }
    }
    return candidate;
}

module.exports = majorityElement;