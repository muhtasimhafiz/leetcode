function strStr(haystack, needle){
    for (let index = 0; index < haystack.length - (needle.length - 1); index++) {
        if(haystack[index] === needle[0] && needle === haystack.substring(index, index+needle.length)) return index;    
    }
    return -1;
}

module.exports = strStr;