// [Problem-118] Square Sort: Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

// okay so my goal is to do this in one single pass over the array

const sortSquares = (ints) => {
  const sorted = [];
  ints.forEach((int) => {
      sorted.push(int * int);
  });
  const sortNumber = (a, b) => {
    return a - b;
  }
  sorted.sort(sortNumber);
  return sorted;
}

const integers = [-9, -2, 0, 2, 3];
const sortedSquares = sortSquares(integers);
console.log("integers: ", integers);
console.log("sortedSquares: ", sortedSquares);