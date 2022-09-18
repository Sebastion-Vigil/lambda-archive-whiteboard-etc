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


// a height-balanced tree is a tree where no leaf is much farther away from 
// the root than any other leaf

const checkBalanced = (node) => {
    // create an empty stack and push root node to stack
    // do the following while stack is not empty
    // pop an item from stack and print it
    // push right child of popped item to stack -> right child first to ensure left node is always processed first
    // push left child of popped item to stack
    if (!node) {
        return "Empty binary tree!";
    }
    const nodeStore = [node];
    let leftHeight = 0;
    let rightHeight = 0;
    while (nodeStore.length > 0) {
        let current_node = nodeStore.pop();
        console.log(current_node.value);
        if (current_node.right) {
            nodeStore.push(current_node.right);
            leftHeight++;
        }
        if (current_node.left) {
            nodeStore.push(current_node.left);
            rightHeight++;
        }
    }
    return leftHeight === rightHeight;
}

// const isBalanced = (root) => {
//     let leftHeight = 0;
//     let rightHeight = 0;
//     if (!root) return true;
//     const nodeStore = [root];
//     while (nodeStore.length > 0) {
//         let current_node = nodeStore.pop();
//         console.log(current_node);
//         if (current_node.right) {
//             nodeStore.push(current_node.right);
//             rightHeight++;
//         }
//         if (current_node.left) {
//             nodeStore.push(current_node.right);
//             leftHeight++;
//         }
//     }
//     return Math.abs(leftHeight - rightHeight) <= 1;
// }

// const binaryTreeTraversalRecursive = (node) => {
//     console.log(node.value);
//     if (node.left) binaryTreeTraversalRecursive(node.left);
//     if (node.right) binaryTreeTraversalRecursive(node.right);
// }


const x = new BinaryTreeNode(1);
x.insertLeft(2);
x.left.insertLeft(3);
x.insertRight(4);
x.right.insertLeft(5);
console.log(checkBalanced(x));

