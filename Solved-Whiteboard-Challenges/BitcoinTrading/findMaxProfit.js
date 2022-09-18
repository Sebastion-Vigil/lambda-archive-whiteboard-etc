/*
# Bitcoin Trading

You're trying to make your fortune by trading Bitcoin. Suppose you want to automate this task. Write a function `findMaxProfit` that receives an array of today's Bitcoin prices. Your function should return the maximum profit you can make from a single buy and sell. You must buy first before selling; shorting is not allowed. 

Examples:
```js
const bitcoinPrices = [1050, 270, 1540, 3800, 2];
findMaxProfit(bitcoinPrices);   // should return 3530, which is the max profit you can make from these prices by buying at 270 and selling at 3800
```

Analyze the time and space complexity of your solution. 
*/


const findMaxProfit = (prices) => {
    let maxPayout = Number.NEGATIVE_INFINITY;
    if (prices.length < 2) return 0;
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                if (prices[j] - prices[i] > maxPayout) {
                    maxPayout = prices[j] - prices[i];
                }
            }
        }
    }
    return maxPayout;
}

const bitcoinPrices = [1050, 270, 1540, 3800, 2];
console.log(findMaxProfit(bitcoinPrices));