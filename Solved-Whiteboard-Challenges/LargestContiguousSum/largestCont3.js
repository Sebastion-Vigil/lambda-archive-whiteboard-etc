const largestContiguousSum = arr => {
    let largestSum = 0;
    let subArrSum = 0; // don't need this here?
    const length = arr.length; // want number of loops to stay constant
  
    // loop through array and get sum of entire array and each i + 1 subarrays
    for (let i = 0; i < length; i++) {
      subArrSum = 0; // reset after getting sum of every subarray
      
      subArrSum = arr.reduce((acc, cur) => {
        let max = Math.max(acc + cur, acc)
        largestSum = Math.max(largestSum, max);
        return acc + cur
        })  
      arr.shift(i) // mutates original array
    }
    return largestSum;
  };
  