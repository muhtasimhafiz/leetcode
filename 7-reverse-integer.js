var reverse = function(x) {
    let bit = Math.pow(2,31) - 1;
    let reversed = x.toString().split('').reverse().join('')
    let result = parseInt(reversed);

    if(result > bit || result < -bit) return 0;

    if(x<0){
        return -result
    } 

    return result;

};