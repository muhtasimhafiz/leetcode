// using the sorting methog, but the question asked the solution to be in o(n)
/* function medianOfThree(arr, start, end) {
    const mid = Math.floor((start + end) / 2);
    const nums = [{value: arr[start], index: start}, {value: arr[mid], index: mid}, {value: arr[end], index: end}];
    nums.sort((a, b) => a.value - b.value);
    return nums[1].index;
}
function partitionIndex(arr, start, end) {
    let pivotIndex = medianOfThree(arr, start, end);
    let pivot = arr[pivotIndex];
    [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]]
    let hi = start - 1;
    for (let j = start; j <= end - 1; j++) {
        if (arr[j] < pivot) {
            hi++
            [arr[j], arr[hi]] = [arr[hi], arr[j]]
        }
    }
    hi++
    [arr[end], arr[hi]] = [arr[hi], arr[end]]
    return hi;
}
const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;
    let pi = partitionIndex(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end)
}
 */

// 100,4,200,1,3,2

function longestConsecutive(arr) {;
    let table = {};
    arr = new Set(arr) 
    maxVal = 0;
    for(i of arr){
        let x=0, y=0;
        if(table.hasOwnProperty(i - 1)) x = table[i - 1];
        if(table.hasOwnProperty(i + 1)) y = table[i + 1];
        let val = x + y + 1;
        table[i - x] = val;
        table[i + y] = val;
        maxVal = Math.max(maxVal, val);
    }
    return maxVal
}

module.exports = longestConsecutive;