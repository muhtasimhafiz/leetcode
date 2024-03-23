/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0];
    let result = '';
    strs = strs.sort((a,b)=> a.length - b.length)
    for(let i = 0; i < strs[0].length;i++){
        let char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(char != strs[j][i]) return result; 
        }
        result += char;
    }
    return result;
};

module.exports = longestCommonPrefix