// Last updated: 4/17/2026, 12:40:24 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max  = -Infinity;
    let min   = Infinity;
    for(let i = 0; i< prices.length ;i++)
    {
      min  = Math.min(min,prices[i]);
      max = Math.max(prices[i] - min ,max);
    }

    return max>0?max:0;
    
};