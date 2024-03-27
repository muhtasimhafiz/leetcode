function removeDuplicates(arg) {
    let count = arg.length;
    if (arg.length < 2) return arg.length;
    let previous_element = arg[0];
    let dash_index = null;
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] == previous_element) {
            count--;
            arg[i] = '_'
            if (dash_index === null) {dash_index = i}
        } else {
            previous_element = arg[i];
            if(dash_index){
                arg[dash_index] = arg[i];
                arg[i] ='_';
                if(arg[dash_index+1]==='_'){
                    dash_index++;
                } else {
                    dash_index = null;
                }
            }
        }
    }

    return count;
}

module.exports = removeDuplicates;