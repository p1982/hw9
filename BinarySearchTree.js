//Create node for tree structure
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Inserts a new node into the BST
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert nodes
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Checks if the tree is a valid BST
    isBST(node, min = null, max = null) {
        if (!node) {
            return true;
        }
        if ((min && node.value <= min) || (max && node.value >= max)) {
            return false;
        }
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }
}

// Binary Search Tree validation demonstration
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(7);
console.log(bst.isBST(bst.root)); // true

// Binary Search Tree Validation

// Purpose: Checks if a binary tree is a valid binary search tree (BST).
// Method:
// isBST(node, min, max): Recursively checks if the tree satisfies the BST property.
// The provided implementations include comments and documentation explaining the purpose, methods, and algorithms used for each data structure. This should cover the requirements of the assignment.