/* 
  A recursive solution
  How would you solve this iteratively?
 */
const checkBalanced = (rootNode) => {
  // An empty tree is balanced by default
  if (!rootNode) return true;
  // recursive helper function to check the min depth of the tree
  const minDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  };
  // recursive helper function to check the max depth of the tree
  const maxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }
  
  return (maxDepth(rootNode) - minDepth(rootNode) === 0);
};

/* Some console.log tests */
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
}

const x = new BinaryTreeNode(1);
x.insertLeft(2);
x.left.insertLeft(3);
x.insertRight(4);
x.right.insertLeft(5);
console.log(checkBalanced(x));