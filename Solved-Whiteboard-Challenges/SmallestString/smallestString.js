

// so now a different idea -> we could use two pointers which would iterate
// over both strings at the same time
// as soon as the two pointers are pointing to different chars we can then 
// return the string whose char comes earlier
// we will just have to add logic for both pointers to grab the value of 
// entire consecutive numbers instead of treating each digit as a separate char
// consider the following two strings: 'a10' and 'a2'

// Examples:

// input: "a", "b"
// expected output: "a" since "a" comes before "b" alphabetically 

// input: "a1", "a2"
// expected output: "a1" since 1 comes before 2

// input: "a10", "a2"
// expected output: "a2" since 2 comes before 10 

const smallestString = (str1, str2) => {
    // we only need to iterate through the shortest string
    const len = str1.length < str2.length ? str1.length : str2.length;
    for (let i = 0; i < len; i++) {
        // check if both letters are strings
        if (str1[i].toUpperCase() !== str1[i].toLowerCase() && str2[i].toUpperCase() !== str2[i].toLowerCase()) {
            if (str1[i] === str2[i]) { 
                continue;
            } else {
                return str1[i] < str2[i] ? str1 : str2; 
            }
        } else if (!isNaN(str1[i] || !isNaN(str2[i]))) { 
            if (!isNaN(str1[i]) && !isNaN(str2[i])) { 
              if (parseInt(str1.slice(i)) === parseInt(str2.slice(i))) {
                  continue;
              } else {
                return parseInt(str1.slice(i)) < parseInt(str2.slice(i)) ? str1 : str2;
              }
            }
        } else {
            return str1[i] < str2[i] ? str1 : str1; 
        }
    }
    return str1 < str2 ? str1 : str2; 
}

console.log(smallestString('a10', 'a2')); // returns a2
console.log(smallestString('a1', 'a2')); // returns a1
console.log(smallestString('a10', 'a2')); // returns a2
console.log(smallestString('a10c', 'a10b')); // returns a10b
