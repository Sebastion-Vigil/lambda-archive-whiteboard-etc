// 1) All Longest Strings: Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

const longestStrings = strs => {
    let longest = [];
    let maxLen = 0;
    strs.forEach((str) => {
      if (str.length > maxLen) {
          longest = [];
          maxLen = str.length;
          longest.push(str);
      }
      else if (str.length === maxLen) {
          longest.push(str);
      }
    });
    return longest;
}

const strings =  ["aba", "aa", "ad", "vcd", "aba"];
console.log(longestStrings(strings));