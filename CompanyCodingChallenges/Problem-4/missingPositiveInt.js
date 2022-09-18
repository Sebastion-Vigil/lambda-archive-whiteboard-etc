

const findMissingInteger = (numbers) => {
   const sorter = (a, b) => a - b;
   numbers.sort(sorter);
   const onlyPositives = numbers.filter((x) => x > 0);
   const potentialNext = numbers.length > onlyPositives.length ? true : false;
   let seeking = 1;

   for (let i = 0; i < onlyPositives.length; i++) {
     if (onlyPositives[i] !== seeking) {
       return seeking;
     } else {
        if (i === onlyPositives.length - 1 && potentialNext) {
          return seeking + 1;
        }
     }
     seeking += 1;
   }
   
}



const x = [3, 4, -1, 1]; // after sorting: [1, 3, 4]
const y = [1, 2, 0];  // after sorting: [1, 2]
const z = [2, 3, 7, 6, 8, -1, -10, 15]; // after sorting [2, 3, 6, 7, 8, 15]
const a = [2, 3, -7, 6, 8, 1, -10, 15]; // after sorting [1, 2, 3, 6, 8, 15]

console.log(findMissingInteger(x)); // returns 2
console.log(findMissingInteger(y)); // returns 3
console.log(findMissingInteger(z)); // returns 1
console.log(findMissingInteger(a)); // returns 4
console.log(findMissingInteger([1, 1, 3, 5]));


