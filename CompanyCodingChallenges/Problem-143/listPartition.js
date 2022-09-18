// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Given a pivot x, and a (it's an array) lst, partition the array into three parts.

// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], 
// one (possible correct answer) partition may be [9, 3, 5, 10, 10, 12, 14].


const partitionList = (x, arr) => {
   const first = [];
   const second = [];
   const third = [];
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] < x) {
           first.push(arr[i]);
       } else if (arr[i] === x) {
           second.push(arr[i]);
       } else {
           third.push(arr[i]);
       }
   }
   return first.concat(second, third);
}

const sample = [9, 3, 5, 10, 10, 12, 14];
console.log(partitionList(10, sample));

