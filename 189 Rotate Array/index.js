// 1 2 3 4
// 4123
// 3412
// 2341
// 1234

function rotate(nums, k){
    k  %= nums.length
    k_elem = nums.splice(-k).reverse();
    for(elem of k_elem) nums.unshift(elem);
    return nums
}

module.exports = rotate