// Given a binary tree like the following:

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }

  depth_first_print() {
    console.log(this.value);
    if (this.left) {
      this.left.depth_first_print();
    }
    if (this.right) {
      this.right.depth_first_print();
    }
  }

}

const validateBinaryTree = (rootNode) => {
  const forLeft  = val => val < rootNode.value;
  const forRight = val => val > rootNode.value;

  const validateBranch = (node, branchComparator) => {
    return node === null || 
      branchComparator(node.value) &&
      validateBranch(node.left, branchComparator) && 
      validateBranch(node.right, branchComparator);
  }

  return validateBranch(rootNode.left, forLeft) && validateBranch(rootNode.right, forRight);
}

// Write a function that accepts a binary tree node and returns true if the tree
// rooted at that node forms a valid binary search tree.

// Example:

// so this one should return true, we'll call it trueRoot
const trueRoot = new BinaryTreeNode(10);
trueRoot.insertLeft(5);
trueRoot.insertRight(15);

// this one is a non-valid binary tree, aptly named falseRoot
const falseRoot = new BinaryTreeNode(50);
falseRoot.insertLeft(30);
falseRoot.left.insertLeft(20);
falseRoot.left.insertRight(60);
falseRoot.insertRight(80);
falseRoot.right.insertRight(90);
falseRoot.right.insertLeft(70);

console.log(falseRoot);
console.log("Okay now, we're going to try something different...");
falseRoot.depth_first_print();
console.log("Now let's check our rootValue: ");
console.log(falseRoot.value);

console.log("Now we'll try to validate the binary tree...");
console.log(validateBinaryTree(falseRoot));

console.log("Here is a true one...");
console.log(validateBinaryTree(trueRoot));

const fiftyLeft = new BinaryTreeNode(10);
fiftyLeft.insertLeft(50);
console.log("The following tree should validate as false: ")
console.log(fiftyLeft);
console.log(validateBinaryTree(fiftyLeft));