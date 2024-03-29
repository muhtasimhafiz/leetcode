function groupAnagrams(arg){
    if(arg.length === 0) return [];
    let hashMap ={};
    for(let i = 0; i < arg.length; i++){
        let sorted = arg[i].split('').sort().join('');
        if(hashMap[sorted]){
            hashMap[sorted].push(arg[i]);
        } else {
            hashMap[sorted] = [arg[i]];
        }
    }
    return Object.values(hashMap).map(group => group);
}

module.exports = groupAnagrams;