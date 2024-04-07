function generateParenthesis(n){

    let result = [];
    let stack = [];
    function backtrack(left, right) {
        if(stack.length === 2*n){
            result.push(stack.join(''))
            return;
        }

        if(left < n){
            stack.push('(');
            backtrack(left+1, right)
            stack.pop();
        }

        if(right < left){
            stack.push(')');
            backtrack(left, right+1)
            stack.pop();
        }
    }

    backtrack(0,0);

    return result;
}


module.exports = generateParenthesis;