var romanToInt = function(s) {
    let s_arr = s.split('');
    let romanToInt = {
        'I':{val:1,order:1},
        'V':{val:5,order:2},
        'X':{val:10,order:3},
        'L':{val:50,order:4},
        'C':{val:100,order:5},
        'D':{val:500,order:6},
        'M':{val:1000,order:7}
    }

    let result  = 0;
    let previous_order = 0;
    for(let i = s_arr.length - 1; i >= 0; i--){   
        let roman = s_arr[i];
        if(previous_order <= romanToInt[roman].order){
            result +=  romanToInt[roman].val;
        } else {
            result -=  romanToInt[roman].val;
        }
        previous_order = romanToInt[roman].order
    }
    return result;
};
module.exports = romanToInt;