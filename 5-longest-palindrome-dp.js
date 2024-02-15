/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //create 2d array
    let str_len = s.length
    let dp_arr = new Array(str_len)

    for(i = 0; i < str_len;i++){
        dp_arr[i] = new Array(str_len)
    }
    let max_str = 0;
    if(s.length == 1){
        return s;
    }
    
    if(s.length == 2){
        if(s[0] == s[1]){
            return s;
        } else {
            return s[0]
        }
    }
    
    
    //fill all i==j to 1
    for(i = 0; i < str_len; i++){
        dp_arr[i][i] = 1
        max_str = s[i]
    }

    //fill all i and i + 1

    for(i = 0; i < str_len; i++){
        if(s[i] == s[i+1]){
            dp_arr[i][i+1] = 1
            max_str =  s.slice(i,i+2)
        }
    }

    //loop for length start from 3
    
    for(k = 3; k <= str_len ; k++ ){
        for(i = 0; i < str_len - k + 1; ++i){
            let j = k + i - 1
            if(s[i]==s[j] && dp_arr[i+1][j-1] == 1){
                dp_arr[i][j] = 1;
                max_length = k
                max_str = s.slice(i, j+1)
            }
        }
    }
    
    return max_str
}

console.log(longestPalindrome('aadfdjaa'))