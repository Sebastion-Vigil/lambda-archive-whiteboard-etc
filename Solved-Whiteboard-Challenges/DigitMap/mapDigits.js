// "23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
function mapDigits(s){

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
  
    //Get the digits, ignore ones and zeroes
    let digits = s.split('').filter(i => i > 1);
    let out = [], tmp = [];
  
    //Some shortcuts
    if(!digits.length){
      return out;
    }
    if(digits.length == 1){
      return digitMapping[digits[0]];
    }
  
    //We're still here, prep out and digits (shift modifies digits)
    out = digitMapping[digits.shift()];
  
    while(digits.length){
      const nextLetters = digitMapping[digits.shift()];
      tmp = out;
      out = [];
      console.log("tmp, out: ", tmp, out)
      tmp.forEach(s => nextLetters.forEach(c => out.push(s+c)));
      console.log("tmp, out (after mod): ", tmp, out);
    }
  
    return out;
  }
  
  console.log(mapDigits("2"));
  console.log(mapDigits("23"));
  console.log(mapDigits("234"));
  console.log(mapDigits("2345"));
  console.log(mapDigits("23456"));