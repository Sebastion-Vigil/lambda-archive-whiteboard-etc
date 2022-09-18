function allLongestStrings(inputArray) {
  const longestStrings = [];
  if (inputArray.length === 1) return inputArray;
  
  const longestString = inputArray.reduce(function(a ,b) {
      return a.length >= b.length ? a : b;
    });
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestString.length) {
      longestStrings.push(inputArray[i]);
    }
  }
  return longestStrings;
};

