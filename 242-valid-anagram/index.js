function isAnagram(s, t) {
    if (s.length === t.length) {
        let sArr = s.split('').sort().join('');
        let tArr = t.split('').sort().join('');
        if (sArr === tArr) { return true; }
    } else { return false; }
    return '';
}

module.exports = isAnagram;