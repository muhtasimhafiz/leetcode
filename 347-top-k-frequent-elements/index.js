function topKFrequent(nums, k) {
    let hashmap = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (hashmap[element]) {
            hashmap[element]++;
        } else {
            hashmap[element] = 1;
        }
    }

    const sortedKeys = Object.keys(hashmap).sort((a, b) => {
        return hashmap[b] - hashmap[a];
    });

    return sortedKeys.slice(0, k).map(key => parseInt(key));
 
}

module.exports = topKFrequent;