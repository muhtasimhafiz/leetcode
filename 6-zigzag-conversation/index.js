function convert(s, numRow){
    if(numRow == 1) return s;
    let step = 2*numRow - 2;
    let result = '';
    for(let i = 0; i < numRow; i++){
        for(let j = i; j < s.length; j+=step){
            result += s[j];
            if(i !=0 && i != numRow - 1 && (j+step-2*i) < s.length ){
                result += s[j+step-2*i];
            }
        }
    }
    return result;
}

module.exports = convert;