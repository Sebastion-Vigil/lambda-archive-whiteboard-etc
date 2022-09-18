// 6
// /   \
// 10     18
// /         \
// 9           89


// depth first search

// 6, 10, 9, 18, 89

const cb = (x) => console.log(x);

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

    depth_first_search(callback) {
        callback(this.value);
        if (this.left) {
            this.left.depth_first_search(callback);
        }
        if (this.right) {
            this.right.depth_first_search(callback);
        }
    }
}


tree = new BinaryTreeNode(6);
tree.insertLeft(10);
tree.left.insertLeft(9);
tree.insertRight(18);
tree.right.insertRight(89);

tree.depth_first_search(cb);





