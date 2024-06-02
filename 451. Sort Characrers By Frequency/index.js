function frequencySort(s) {
    let hashmap = {};

    for (let i = 0; i < s.length; i++) {
        if (!hashmap[s[i]]) {
            hashmap[s[i]] = 0;
        }
        hashmap[s[i]]++;
    }


    let char = [];

    for (let i in hashmap) {
        char.push(i)
    }


    function quickSort(arr, start = 0, end = arr.length - 1) {
        if (start >= end) return;
        let partitionIndex = partition(arr, start, end);
        quickSort(arr, start, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, end);
    }

    function partition(arr, start, end) {
        let pivotIndex = medianPivot(arr, start, Math.floor((start + end) / 2), end);
        let pivot = hashmap[arr[pivotIndex]];
        
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        
        let partitionIndex = start-1;
        for(let i = start; i < end; i++){
            if(hashmap[arr[i]] > pivot){
                partitionIndex++;
                [arr[partitionIndex], arr[i]] = [arr[i], char[partitionIndex]]
            }
        }
        partitionIndex++;
        [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
        return partitionIndex
    }
    
    function medianPivot(arr, start, middle, end) {
        let startVal = hashmap[arr[start]];
        let middleVal = hashmap[arr[middle]];
        let endVal = hashmap[arr[end]];
    
        if ((startVal > middleVal) !== (startVal > endVal)) return start;
        else if ((middleVal > startVal) !== (middleVal > endVal)) return middle;
        else return end;
    }

    quickSort(char);

    let res = '';

    for(i of char){
        count = hashmap[i];
        while(count){
            count--;
            res += i
        }
    }
    return res;
}




// let res = '';
// for (i of char) {
//     let count = hashmap[i];
//     while (count) {
//         res += i;
//         count--;
//     }
// }
// return res;
// }

module.exports = frequencySort;