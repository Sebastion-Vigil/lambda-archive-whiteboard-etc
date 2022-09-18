/*
Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.
For example, given the following tree and K of 20
    10
   /   \
 5      15
       /  \
     11    15
Return the nodes 5 and 15.
*/
class Node {
    constructor(val){
      this.val = val
      this.left = null
      this.right = null
    }
  }
  let root = new Node(10)
  root.left = new Node(5)
  root.right = new Node(15)
  root.right.left = new Node(11)
  root.right.right = new Node(15)
  let findPair = (root, target, lookup) => {
    
    if (!root){
      return false
    }
    if (lookup[target - root.val]){
      return ([root.val, target - root.val])
    }
    
    lookup[root.val] = target - root.val
    return findPair(root.left, target, lookup) ||
    findPair(root.right, target, lookup)
    
  }
  findPair(root, 25, {})