// heap tree order: top to bottom, left to right
// MAX Heap: P >= C
// MIN Heap: P <= C
// when we add an item, we basically have to either make it the root node
// if root is null, or add it to the leftmost available
// when we add an item, we compare its value with the parent
// if MAX Heap, parent needs to be greater
// if MIN Heap, parent needs to be smaller
// if not, then we need to flip the values of parent and child
// we continue flipping the value of parent and child nodes
// until we reach a parent node that meets the proper condition
// then we know we the Heap data structure is properly balanced

// okay since I'm going with creating a heap as an actual tree
// then I need to keep track of the next spot a new node will
// initially be added to, before beginning the shifting up
// process if needed to balance the heap

// hmm...now as I think of this more I think this could be simplified
// to keeping track of the parent node

// okay, so as with anything else I've studied, NOTHING ever
// comes easy. So I just stumbled on this little treasure:
// I've already implemented heap as an array, but I also want to implement it as a tree
// https://stackoverflow.com/questions/18241192/implement-heap-using-a-binary-tree#21391589
// Now I'm on to something. I can find the initial position of the next node by converting
// the total number of nodes (including the one we're about to add) to binary, chopping off
// the first number, and then using each digit of the remaining numbers to determine the path
// to the initial spot of the newly added node
// 0 means go left, 1 means go right

// so to delete the root node and properly rebalance the heap tree I need to:
// store value of root node in a variable to be returned
// delete last node added to heap and make root node that value
// now, starting at the root node, if tree is now unbalanced, we must sift down
// we will sift down in the direction of the smallest child node (biggest in the case of a max heap)
// switching values of parent and child until tree is balanced

class MinHeap {
  constructor () {
    (this.root = undefined),
    (this.min = undefined),
    (this.max = undefined),
    (this.pathToLastNode = undefined),
    (this.lastNodeParentDirection = undefined),
    (this.count = 0)
  }

  insert (value) {
    this.count += 1 // immediately increment count
    const newNode = {
      // nodes are just objects
      value,
      left: null,
      right: null,
      parent: null,
      smallestChild: null
    }
    if (!this.root) {
      this.root = newNode
      this.min = newNode.value
      this.max = newNode.value
    } else {
      if (newNode.value < this.min) {
        this.min = newNode.value
      }
      if (newNode.value > this.max) {
        this.max = newNode.value
      }
      
      const path = (this.count >> 0).toString(2).substring(1)
      this.pathToLastNode = path
      this.lastNodeParentDirection =
        path[path.length - 1] === '0' ? 'left' : 'right'

      if (path.length === 1) {
        newNode.parent = this.root
        if (path === '0') {
          this.root.left = newNode
        }
        if (path === '1') {
          this.root.right = newNode
        }
      } else {
        let parentNode = this.root
        for (let i = 0; i < path.length - 1; i++) {
          if (path[i] === '0') {
            parentNode = parentNode.left
          }
          if (path[i] === '1') {
            parentNode = parentNode.right
          }
        }
        newNode.parent = parentNode
        if (path[path.length - 1] === '0') {
          parentNode.left = newNode
        }
        if (path[path.length - 1] === '1') {
          parentNode.right = newNode
        }
      }
    }
    let currentNode = newNode
    while (currentNode.parent && currentNode.value < currentNode.parent.value) {
      const tmp = currentNode.value
      currentNode.value = currentNode.parent.value
      currentNode.parent.value = tmp
      currentNode = currentNode.parent
    }
    this.lastAdded = newNode
    if (this.lastAdded.left && this.lastAdded.right) {
      const direction =
        this.lastAdded.left.value < this.lastAdded.right.value
          ? 'left'
          : 'right'
      this.lastAdded.smallestChild = direction
    } else if (this.lastAdded.left) {
      this.lastAdded.smallestChild = 'left'
    } else if (this.lastAdded.right) {
      this.lastAdded.smallestChild = 'right'
    }
  }

  delete () {
    const removed = this.root.value
    if (this.count === 1 || this.count === 0) {
      this.root = undefined
      return undefined
    }

    this.root.value = this.lastAdded.value // reassign root value to that of last added item
    this.lastAdded.parent[this.lastNodeParentDirection] = null // remove last added node

    return removed
  }

  getMin () {
    return this.min
  }

  getMax () {
    return this.max
  }
}

const x = new MinHeap()
x.insert(1)
x.insert(3)
x.insert(4)
x.insert(5)
x.insert(6)
x.insert(7)
x.insert(8)
x.insert(2)

// console.log(x.root.left.value);
// console.log(x.getMin());
// console.log(x.getMax());
console.log(x);
// console.log(x.root.value);
// console.log(x.delete());
// console.log("Here is the new root value: ", x.root.value);
// console.log(x.root.left);
