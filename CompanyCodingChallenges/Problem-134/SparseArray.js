// # Daily Coding Problem: Problem #134 [Easy]
// # Good morning! Here's your coding interview problem for today.

// # This problem was asked by Facebook.

// # You have a large array with most of the elements as zero.

// # Use a more space-efficient data structure, SparseArray, that implements the same interface:

// # init(arr, size): initialize with the original large array and size.
// # set(i, val): updates index at i with val.
// # get(i): gets the value at index i.

class SparseArray {
  constructor(arr, size) {
    this.arr = arr;
    this.size = size;
    this.storage = {};
    this.error = "Invalid index!";
    for (let i = 0; i < this.size - 1; i++) {
      if (this.arr[i] !== 0) {
        this.storage[i] = this.arr[i];
      }
    }
  }

  set(i, val)  {
    if (i < 0 || i >= this.size) {
      console.log(this.error);
      return;
    }
    this.storage[i] = val;
  };

  get(i) {
    if (i < 0 || i >= this.size) {
      console.log(this.error);
      return;
    }
    return this.storage[i];
  };
}

const sparseArr = [
  0,
  0,
  0,
  0,
  0,
  0,
  7,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0
];


const formattedArr = new SparseArray(sparseArr, sparseArr.length);

console.log(formattedArr.get(6));
formattedArr.set(6, 22);
console.log(formattedArr.get(6));



