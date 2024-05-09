function fib(n){
    if(n==1 || n==0) return n;
    let a = 0, b = 1, c = 0;
    //0,1,2,3,4,5,6,7
    //0,1,1,2,3,5,8,13

    for(let i = 0 ; i<n-1; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return b;
    
}

function fibRecursion(n) {
    if(n==1 || n == 0) return n
    if(n < 0) return 0

    return fib(n-1) + fib(n-2);
}

module.exports = {
    fib,
    fibRecursion
}