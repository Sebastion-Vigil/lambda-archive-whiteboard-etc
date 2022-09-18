// Search In Sorted Matrix
// Given a matrix (a two-dimensional array), whose width and height do not necessarily match,
//  containing distinct integers where each row is sorted and each column is also sorted, write a 
//  function that searches for a target value in the matrix. The function should return a tuple 
//  (or two-element array) of the row and column indices of the target value. If the target value is 
//  not found in the array, the function should return [-1, -1].

// Sample input: 45, 
// [ 
// [1, 4, 7, 12, 15, 999], 
// [2, 5, 19, 32, 35, 1001], 
// [4, 8, 24, 34, 36, 1002], 
// [40, 41, 42, 44, 45, 1003], 
// [98, 99, 101, 104, 190, 1009], 
// ]

// Expected output: [3, 4] // i and j index addresses of 45 (location)

// Analyze the space and time complexity of your solution.

const sample = [ 
    [1, 4, 7, 12, 15, 999], 
    [2, 5, 19, 32, 35, 1001], 
    [4, 8, 24, 34, 36, 1002], 
    [40, 41, 42, 44, 45, 1003], 
    [98, 99, 101, 104, 190, 1009], 
    ];

const searchInSortedMatrix = (matrix, num) => {
  // is number too big or too small? (is number not there)
  if (num < matrix[0][0] || num > matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]) {
     return [-1, -1];
  }
  const iAndJ = [-1, -1];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length - 1; j++) {
          if (matrix[i][j] === num) {
              iAndJ.pop();
              iAndJ.pop();
              iAndJ.push(i);
              iAndJ.push(j);
          }
      }
  }
  return iAndJ;
}

console.log(searchInSortedMatrix(sample, 45)); // [3, 4]