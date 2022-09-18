// [Problem-121] Palindrome At Most K:  Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.



function isPalindrome(str) {
  let leftI = 0;
  let rightI = str.length - 1;
  while (leftI < rightI) {
      if (str[leftI] !== str[rightI]) {
          return false;
      }
      leftI ++;
      rightI --;
  }
  return true;
}

const str1 = "aba";
const str2 = "ababa";
const str3 = "SeanValdivia";
const str4 = "aaaa";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
// first check if str is already palindrome

// FIRST CONCEPTUAL APPROACH:
// if str not palindrome, start process of checking
// if str minus one char is palindrome -> do this for each 
// char in str
// then do the same up to k
// 