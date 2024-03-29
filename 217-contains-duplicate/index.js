function containsDuplicate(arg){
    const set = new Set(arg);
    return set.size < arg.length
}

module.exports = containsDuplicate;