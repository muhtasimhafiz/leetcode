function productExceptSelf(arg){

    let ans = Array(arg.length).fill(1);

    let left = 1;
    for(let i = 0; i < arg.length; i++){
        ans[i] *= left;
        left *= arg[i];
    }

    let right = 1;
    for(let i = arg.length - 1; i >= 0; i--){
        ans[i] *= right;
        right *= arg[i];
    }

    return ans;
}

module.exports = productExceptSelf;