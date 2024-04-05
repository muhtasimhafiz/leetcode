function searchMatrix(matrix, target){
    let in_arr = null;
    if(matrix[0][0] > target) return false;
    for(let index = 0; index < matrix.length; index++) {
        if(matrix[index][matrix[index].length - 1 ] == target) return true;
        if(matrix[index][matrix[index].length - 1 ] > target) {
            in_arr = matrix[index];
            break;
        }
    }

    if(in_arr == null) return false;
    let left = 0;                                                                                                                  0;
    let right = in_arr.length - 1;
    
    while(left <= right) {
        let pivot = Math.floor((left+right)/2);
        if(in_arr[pivot] === target) return true;

        if(in_arr[pivot] > target) {
            right = pivot-1;
            continue;
        }

        left = pivot + 1;
    }

    return false;
}

module.exports = searchMatrix;