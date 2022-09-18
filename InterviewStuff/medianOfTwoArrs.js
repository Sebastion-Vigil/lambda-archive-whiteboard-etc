

var findMedianSortedArrays = function (nums1, nums2) {
    const all = nums1 > nums2 ? nums2.concat(nums1) : nums1.concat(nums2);
    console.log("Here is all: ", all);
    if (all.length % 2 > 0) {
      return all[parseInt(all.length / 2)]
    } else {
       const leftSide = all[all.length / 2 - 1];
       const rightSide = all[all.length / 2];
       return (leftSide + rightSide) / 2;
    }
};


// how to figure out if an array has an even or odd number of items:
// arr1 = [1, 2, 3, 4, 5]
// arr1.length % 2 -> if greater than zero, we know it's odd (this one will return greater than zero)
// arr2 = [1, 2, 3, 4] 
// arr2.length % 2 -> this one will return 0
// how to return median of sorted array with odd amount of items:
// all[parseInt(all.length / 2)]
// const rightSide = x[x.length / 2]
// const leftSide = x[x.length / 2 - 1]
const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9];


// console.log(findMedianSortedArrays(number1, number2));
// console.log(findMedianSortedArrays(evenArr1, evenArr2));
const evenArr1 = [1, 2, 3, 4];
const evenArr2 = [5, 6, 7, 8];
console.log("And here is the median: ", findMedianSortedArrays(number2, number1));
