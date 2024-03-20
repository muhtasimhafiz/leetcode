/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let result = true;
    for(let i = 0, j=str.length-1; i < str.length; i++,j--) {
        if(j==i){
            break;
        }
        if(str[i] == str[j]){
            continue;
        } else {
            return false;
        }
    }
    return result;

};

module.exports = isPalindrome;
