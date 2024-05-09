function quickSort(arr, start = 0, end = arr.length - 1) {
    if(start >= end) return;    
    const partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let partitionIndex = start - 1;

    for(let i=start; i<end; i++){
        if(arr[i]<pivot){
            partitionIndex++;
            [arr[partitionIndex],arr[i]] = [arr[i], arr[partitionIndex]]
        }
    }
    partitionIndex++;
    [arr[partitionIndex],arr[end]] = [arr[end], arr[partitionIndex]]
    return partitionIndex;
}


function mergeSort(arr, start=0, end=arr.length-1) {
    if(start >= end) return;
    let middle = Math.floor((start+end)/2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle+1, end);
    merge(arr, start, middle, end)

        
}

function merge(arr, start, middle, end) {
    let l1 = middle - start + 1;
    let l2 = end - middle;

    let left = new Array(l1);
    let right = new Array(l2);

    for(let i = 0; i < l1; i++){
        left[i] = arr[i + start];
    }

    for(let j = 0; j < l2; j++){
        right[j] = arr[j + middle + 1]
    }

    let k = start, i = 0, j = 0;

    while(i < l1 && j < l2){
        if(left[i] < right[j]){
            arr[k] = left[i];
            i++
        } else {
            arr[k] = right[j];
            j++
        }
        k++
    }

    while(i < l1){
        arr[k] = left[i];
        i++;
        k++
    }

    while(j < l2){
        arr[k] = right[j];
        j++;
        k++
    }
}



  function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let j = i + 1
        while(arr[j-1] > arr[j]){
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            j--
        }
    }
  }
module.exports = {
    quickSort,
    mergeSort,
    insertionSort
};