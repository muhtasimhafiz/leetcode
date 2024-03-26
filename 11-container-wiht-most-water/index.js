function maxArea(arg){
    let [left, right] = [0, arg.length - 1];
    let maxArea = -Infinity;
    while (left < right){
        maxArea = Math.max(Math.min(arg[left], arg[right])*(right - left),maxArea)
        if(arg[left] > arg[right]){
            right--;
        } else {
            left++
        }
    }

    return maxArea;
}

module.exports = maxArea;