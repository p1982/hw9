class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Inserts a new node at the end of the linked list
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Deletes a node with a specific value from the linked list
    delete(value) {
        if (!this.head ) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Searches for a node with a specific value
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

// Linked List usage demonstration
let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
console.log(ll.search(20)); // Node with value 20
ll.delete(20);
console.log(ll.search(20)); // null

// Linked List

// Purpose: A linear data structure where elements are nodes linked to each other.
// Methods:
// insert(value): Inserts a new node at the end of the linked list.
// delete(value): Deletes a node with a specific value from the linked list.
// search(value): Searches for a node with a specific value.
// hasCycle(): Detects if there is a cycle in the linked list.
// Min/Max Stack

