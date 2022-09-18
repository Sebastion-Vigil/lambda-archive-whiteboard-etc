breakString = (str, maxLength, final = []) => {
    const broken = str.split(" ")
    let length = broken[0].length;
    let subphrase = broken[0];
    let iteration = 1;
  ​
    if(broken.length === 1){
      final.push(str);
      return final;
    }
  ​
    if(subphrase.length > maxLength){
      return null;
    }
  ​
    while(length < maxLength){
      if(length + broken[iteration].length < maxLength){
        subphrase += ` ${broken[iteration]}`;
        length += broken[iteration].length;
        iteration++;
      }else{
        length = maxLength;
        final.push(subphrase);
      }
    }
  ​
    const substring = broken.slice(iteration).join(" ");
    return(breakString(substring, maxLength, final));
  }
  ​
  console.log(breakString("the quick brown fox jumps over the lazy dog", 10))