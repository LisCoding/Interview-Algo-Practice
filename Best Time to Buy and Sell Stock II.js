var maxProfit = function(prices) {
    let profit = 0;
    if (prices === undefined) {
      return profit;
    }
    
    for (let i=1; i<prices.length; i++) {
      if((prices[i] > prices[i-1])) {
        profit += prices[i] - prices[i-1];
      }
      
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.
