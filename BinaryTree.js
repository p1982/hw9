//Create node for tree structure
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Inserts a new node into the binary tree
    insert(value) {
        //Create new node for tree structure
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

    // In-order traversal of the binary tree
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Pre-order traversal of the binary tree
    preOrder(node) {
        if (node) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Post-order traversal of the binary tree
    postOrder(node) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // Searches for a node with a specific value
    search(node, value) {
        if (!node) {
            return null;
        } else if (value < node.value) {
            return this.search(node.left, value);
        } else if (value > node.value) {
            return this.search(node.right, value);
        } else {
            return node;
        }
    }
}

// Binary Tree usage demonstration
let bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(20);
bt.insert(3);
bt.insert(7);
bt.inOrder(bt.root); // 3, 5, 7, 10, 20
bt.preOrder(bt.root); // 10, 5, 3, 7, 20
bt.postOrder(bt.root); // 3, 7, 5, 20, 10
console.log(bt.search(bt.root, 7)); // Node with value 7


// Binary Tree

// Purpose: A hierarchical data structure with a root node and child nodes forming a tree.
// Methods:
// insert(value): Inserts a new node into the binary tree.
// inOrder(node): In-order traversal of the binary tree.
// preOrder(node): Pre-order traversal of the binary tree.
// postOrder(node): Post-order traversal of the binary tree.
// search(node, value): Searches for a node with a specific value.
