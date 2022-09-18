// # Largest Contiguous Sum

// Given an array of positive and negative integers, write a function to 
// find the contiguous sequence with the largest sum. Return the sum.

// Example

// const arr = [2, 3, -8, -1, 2, 4, -2, 3];
// console.log(largestContiguousSum(arr)); // should print 7

// Analyze the time and space complexity of your solution.

// if all numbers in the array are positive, answer is sum of entire array
// if all numbers in the array are negative, answer is empty array

// so we're essentially looking for a sub array

const seq = [2, 3, -8, -1, 2, 4, -2, 3];

const maxContiguousSum = (arr) => {
    // first off we need to keep two variables for comparison, 
    // the total max to be returned, and the max value of the current spot
    let max = 0;
    let currentMax = 0;
    let sumElements = [];

    for (let i = 0; i < arr.length; i++) {
        currentMax += arr[i];
        sumElements.push(arr[i]);
        if (currentMax < 0) {
            currentMax = 0; // reset to zero if negative 
            sumElements = [];
        }
        if (max < currentMax) { // update the value of max if currentMax is bigger
            max = currentMax;
        }
    }
    // the largest congiguous sequence cannot end with zero or a negative number
    if (sumElements[sumElements.length - 1] <= 0) {
        sumElements.pop();
    }
    console.log("Original sequence: ", arr, "Sum Elements: ", sumElements); // compare both for better visualization
    return max; // return the answer!
};

console.log(maxContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should return 7
console.log(maxContiguousSum([1, 23, 90, 0, -9]));  // should return 114
console.log(maxContiguousSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))