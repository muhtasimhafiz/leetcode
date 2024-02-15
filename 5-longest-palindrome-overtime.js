/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i = 0, j = s.length-1;
    let max_str = s[0];


    for(i; i < s.length; i++ ){
        if((s.length - i) < max_str.length){
            return max_str
        }
        for(j=s.length-1; j!=i; j--){
            if((j-i+1) < max_str.length){
                break;
            }
            if(s[i] == s[j]){
                let pal_str = s.slice(i,j+1)
                let reversed_str = pal_str.split('').reverse().join('')
                if(pal_str == reversed_str && max_str.length < pal_str.length){
                    max_str = pal_str
                
                }
        }
    }}

    return max_str;
}