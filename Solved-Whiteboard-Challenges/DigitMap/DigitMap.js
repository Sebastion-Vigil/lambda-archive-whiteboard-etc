// 1) This problem was asked by Yelp.
// Given a mapping of digits to letters (as in a phone number), and a digit string, 
// return all possible letters the number could represent. You can assume each valid 
// number in the mapping is a single digit.
// For example if {"2": ["a", "b", "c"], 3: ["d", "e", "f"], …} 
// then "23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const digitMap = (digiStr) => {
  
  const digitMapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const length = digiStr.length; 
  if (length === 1) return digitMapping[digiStr]; // in case of single digit strings
  const indexes = []; // index addresses of charsets, in order
  for (let i = 0; i < length; i++) {
    indexes.push(0);
  }
  let nextI = length === 2 ? 0 : 1; // current spot of nextI in indexes
  const possibleStrs = []; // for final answer of possible permutations
  let str = ''; 
  let endCount = 0; // if all addresses in indexes are at their end, then break while loop
  while (true) {
    
    for (let i = 0; i < length; i++) {
      str += digitMapping[digiStr[i]][indexes[i]];
      if (indexes[i] === digitMapping[digiStr[i]].length - 1) {
        endCount += 1;
      }
    }
    possibleStrs.push(str);
    str = '';
    if (endCount === length) {
      break;
    }
    endCount = 0;
    // increment last item in indexes as long as it < length of corresponding inner char array
    if (indexes[indexes.length - 1] < digitMapping[digiStr[digiStr.length - 1]].length - 1) {
      indexes[indexes.length - 1] += 1;
    }
    else {
      indexes[indexes.length - 1] = 0;
      // increment nextI as long as < length of corresponding inner array
      if (indexes[nextI] < digitMapping[digiStr[nextI]].length - 1) {
        indexes[nextI] += 1;
      }
      else {
      // otherwise shift position of nextI in indexes array
        // if next position of nextI not end of indexes array
          // shift nextI 1 spot forward in indexes
        if (nextI + 1 < length - 1) {
          nextI += 1;
          indexes[nextI] += 1;
        }
        else {
          // else reset all indexes to 0, starting from position 1
          for (let i = 1; i < indexes.length; i++) {
            indexes[i] = 0;
          }
          // increment first item in indexes
          indexes[0] += 1;
          nextI = 1; // place nextI at position 1
        }
      }
    }
  }
  return possibleStrs;
}

console.log(digitMap("2"));
console.log(digitMap("23"));
console.log(digitMap("234"));
console.log(digitMap("2345"));
console.log(digitMap("23456"));
