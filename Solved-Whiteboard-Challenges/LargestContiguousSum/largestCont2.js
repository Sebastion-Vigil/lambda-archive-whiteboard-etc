// O(n^2)
const largestContiguousSum = arr => {
    let largestSum = 0;
    let subArrSum = 0;
  
    // loop through array and get sum of entire array and each i + 1 subarrays
    for (let i = 0; i < arr.length; i++) {
      subArrSum = 0; // reset after getting sum of every subarray
      for (let j = i; j < arr.length; j++) {
        subArrSum += arr[j];
        // console.log(subArrSum);
        largestSum = Math.max(largestSum, subArrSum); // if subArrSum is greater, set it as the largestSum
      }
  
    //   console.log(largestSum);
    }
    return largestSum;
  };
  
  console.log(largestContiguousSum([5, -9, 6, -2, 3])); // should print 7
  console.log(largestContiguousSum([1, 23, 90, 0, -9])); // should print 114  ??? prints 105 instead
  console.log(largestContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7
  console.log(largestContiguousSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));