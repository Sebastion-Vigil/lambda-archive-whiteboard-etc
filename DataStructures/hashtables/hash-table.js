/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const keyHash = getIndexBelowMax(key, this.limit);
    // i've been here before; the first time I made hash tables the buckets were arrays
    // i then implemented the bucket as linked lists...but this time I'm thinking...why not objects?
    if (this.storage[keyHash] === undefined) {
      this.storage[keyHash] = {};
      this.storage[keyHash][key] = value;
      // console.log(Object.keys(this.storage[keyHash]));
    } else {
      this.storage[keyHash][key] = value;
      // console.log(Object.keys(this.storage[keyHash]));
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    // need the keyHash again to determine where it is
    const keyHash = getIndexBelowMax(key, this.limit);
    // also need to handle if nonexistent key is used?
    if (this.storage[keyHash][key] === undefined) return null;
    // hmm...wonder if they want us to return the deleted key/value pair? probably not
    delete this.storage[keyHash][key]; 
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // again we will need the keyHash to determine where it is...
    const keyHash = getIndexBelowMax(key, this.limit);
    console.log("Here is the keyHash: ", keyHash);
    if (this.storage[keyHash][key] === undefined) return null;
    return this.storage[keyHash][key];
  }
}

module.exports = HashTable;

const x = new HashTable(8);
x.insert('password', 'zeroregrets');
x.insert('password2', 'notagain');
x.insert('password3', 'skittles');
// console.log(Object.entries(x.storage[5]));
// console.log(Object.entries(x.storage[1]));
console.log(x.storage);
console.log("About to delete password3/skittles key/value pair: ");
x.remove('password3');
console.log(x.storage);
console.log("About to retrieve and return value of password/zeroregrets key/value pair: ");
console.log(x.retrieve('password'));
console.log(x.retrieve('key1'));