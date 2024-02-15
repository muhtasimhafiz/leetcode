var lengthOfLongestSubstring = function (s) {
    let charMap = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = end;

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcabc'));