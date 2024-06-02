function merge(nums1, m, nums2, n){
    let i = m-1;
    let j= n-1;
    let k = m + n - 1;

    if(j < 0) return nums1;

    while(j>=0 && i>=0){
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }

    return nums1
}
// function merge(nums1, m, nums2, n){
//     nums1.splice(m);
//     nums1.push(...nums2);
//     return nums1.sort((a,b)=>a-b)
// }
module.exports = merge;