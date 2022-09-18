


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

const validateBinaryTree = (rootNode) => {
    let isValid = true;
    const rootValue = rootNode.value;
    const validateLeft = (node) => {
        if (node.value > rootValue) {
            isValid = false;
        }
        if (node.left) {
          validateLeft(node.left);
        }
        if (node.right) {
          validateLeft(node.right);
        }
    }
    const validateRight = (node) => {
        if (node.value < rootValue) {
            isValid = false;
        }
        if (node.left) {
          validateRight(node.left);
        }
        if (node.right) {
          validateRight(node.right);
        }
    }
    if (rootNode.left) {
        validateLeft(rootNode.left);
    }
    if (rootNode.right) {
        validateRight(rootNode.right);
    }
    return isValid;
}

const root = new BinaryTreeNode(10);
root.insertLeft(5);
root.insertRight(15);

const falseRoot = new BinaryTreeNode(10);
falseRoot.insertLeft(50);

console.log("This one should be true: ");
console.log(validateBinaryTree(root));
console.log("And this one should be false: ");
console.log(validateBinaryTree(falseRoot));
