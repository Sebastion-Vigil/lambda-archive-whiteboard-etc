// tickets are considered lucky when the sum of the first half
// of the numbers equal the sum of the second half of the numbers
// write a function that takes a number and determines if the
// first half of its digits summed equal the second half
// of its digits summed
// number will be no smaller than 10
// number will have even number of digits
// maximum execution time is 4000 miliseconds

const isLucky = n => {
  // min is 10 and we know it's false
  if (n === 10) return false;
  // store digits in an array
  const digitCorral = [];
  // use modulo, division and Math.trunc
  while (n > 0) {
    // push reverses the order but that doesn't matter
    // since the sum of each half will still be the same
    digitCorral.push(n % 10);
    n /= 10;
    n = Math.trunc(n);
  }
  // get sum of first half of array
  const firstHalf = digitCorral
    .slice(0, digitCorral.length / 2)
    .reduce(function(a, b) {
      return a + b;
    });
  // get sum of second half of array
  const secondHalf = digitCorral
    .slice(digitCorral.length / 2, digitCorral.length)
    .reduce(function(a, b) {
      return a + b;
    });
  // return a boolean
  return firstHalf === secondHalf;
};

console.log(isLucky(1230));
