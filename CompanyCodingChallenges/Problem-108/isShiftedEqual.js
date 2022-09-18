// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

const shiftEqual = (str1, str2) => {
  if (str1.length !== str2.length) return;
  const length = str1.length;
  let needSliceStart = true;
  let startSlice = 0;
  let seeking = 0; // loop through str1
  let i = 0;
  while (i < length) {
    if (str2[i] === str1[seeking]) {
      seeking = seeking < length ? ++seeking : 0;
      if (needSliceStart) {
        startSlice = i;
        needSliceStart = false;
      }
    } else {
      seeking = 0;
      needSliceStart = true;
      startSlice = 0;
    }
    i += 1;
  }
  return str2.slice(startSlice) + str2.slice(0, startSlice) === str1;
};

const s1 = "abcde";
const s2 = "cdeab";
const s3 = "abacd";
const s4 = "cdaba";
const s5 = "aabcdaaz";
const s6 = "aazaabcd";
const s7 = "abc";
const s8 = "acb";

console.log(shiftEqual(s1, s2));
console.log(shiftEqual(s3, s4));
console.log(shiftEqual(s5, s6));
console.log(shiftEqual(s7, s8));
