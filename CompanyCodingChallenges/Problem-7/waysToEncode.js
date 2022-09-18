// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

// so this is a really strange one...
// hmm...let's think in some pseudocode first
// so I'm going to have to do some parsing
// the largest decodable chunk will be two chars long
// and the smallest chunk will be one char long
// need to create a mapping--or do I?

const waysToEncode = (cipherText) => {
  let count = 1; // we already know it can be decoded at least one way
  const alphaChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphaMapping = {};
  let key = 1;
  alphaChars.forEach((char)=>{
    alphaMapping[key] = char;
    key += 1;
  });
  return alphaMapping;
}

console.log(waysToEncode('111'));