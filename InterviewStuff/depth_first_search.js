
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
        const stack = [];
        let current_node = this;
        while (current_node.value) {
            callback(current_node.value);
            stack.push(current_node);
            if (current_node.left) {
              current_node = current_node.left;
            } else {
                while (stack) {
                    const node = stack.pop();
                    if (node.right) {
                        callback(node.right);
                    }
                }
            }

        }
    }
}

tree = new BinaryTreeNode(6);
tree.insertLeft(10);
tree.left.insertLeft(9);
tree.insertRight(18);
tree.right.insertRight(89);

tree.depth_first_search(cb);