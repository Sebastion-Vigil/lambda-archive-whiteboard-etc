

// You have an arr: [2, 3, 6, 6, 5]
// Make a function that returns the second greatest int


const secondGreatest = (arr) => {
  // neg infinity used in case of arr with negative ints
  let max = Number.NEGATIVE_INFINITY; 
  let nextMax = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
      // if item less than max, make item max
      if (arr[i] > max) {
          max = arr[i];
      }
      // if item greater than nextMax and item less than max, make item nextMax
      if (arr[i] > nextMax && arr[i] < max) {
          nextMax = arr[i];
      }
  }
  return nextMax;
}

const theArr = [2, 3, 6, 6, 5];
console.log(secondGreatest(theArr));