function maxProfit(arr) {
    let buy = arr[0];
    let profit = 0;
    for (let index = 1; index < arr.length; index++) {
        if(arr[index] < buy) {
            buy = arr[index];
        } else if((arr[index]-buy) > profit) {
            profit = arr[index]-buy;
        }
    }

    return profit;
}

module.exports = maxProfit;