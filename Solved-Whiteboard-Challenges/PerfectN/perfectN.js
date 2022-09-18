// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// A number is considered perfect if its digits sum up to exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you should return 28.

const perfectNumber = (n) => {
    let preSum = 0;
    let strN = n.toString();
    for (let i = 0; i < strN.length; i++) {
      preSum += parseInt(strN[i]);
    }
    let perfectN = 10 - preSum;
    strN += perfectN.toString();
    return strN;
  }
  
  console.log(perfectNumber(1));
  console.log(perfectNumber(2));
  console.log(perfectNumber(16));