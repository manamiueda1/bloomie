// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    //     let min = prices[0];
    //     let profit = 0;
        
    //     for (let i = 1; i < prices.length; i++){
    //         if (prices[i] < min){
    //             min = prices[i]
    //         }
    //         if (prices[i] - min > profit){
    //             profit = prices[i] - min
    //         }
    //     }
    //     return profit
        
        let min = Infinity;
        let profit = -Infinity;
        
        for(let i = 0; i < prices.length; i++) {
            min = Math.min(min, prices[i]);
            profit = Math.max(profit, prices[i] - min);
        }
        return profit
    };