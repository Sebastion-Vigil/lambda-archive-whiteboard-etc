// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Given a number in the form of a list of digits, return all possible permutations.

// For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]

// [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
//  0  1  2    0  2  1    1  0  2    1  2  0    2  0  1    2  1  0

// [1, 2, 3]
//  0  1  2
// [1, 3, 2]
//  0  2  1
// [2, 1, 3]
//  1  0  2
// [2, 3, 1]
//  1  2  0
// [3, 1, 2]
//  2  0  1
// [3, 2, 1]
//  2  1  0

const digitList = (digits) => {
  const possiblePermutations = [];
  
}

console.log(digitList([1, 2, 3]))