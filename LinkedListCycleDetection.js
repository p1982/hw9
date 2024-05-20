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

    // Detects if there is a cycle in the linked list
    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
}

// Linked List Cycle detection demonstration
let cycleList = new LinkedList();
cycleList.insert(1);
cycleList.insert(2);
cycleList.insert(3);
cycleList.head.next.next.next = cycleList.head; // Creating a cycle
console.log(cycleList.hasCycle()); // true



// LinkedList Class Description
// The LinkedList class is a linear data structure consisting of nodes where each node contains a value and a reference (or link) to the next node in the sequence. This class provides methods to insert nodes and to detect cycles within the list.

// Methods:
// insert(value): Adds a new node with the specified value at the end of the linked list.
// hasCycle(): Detects if there is a cycle in the linked list using Floyd's Cycle Detection Algorithm (Tortoise and Hare Algorithm).
// Methods Description
// insert(value): This method creates a new node with the given value and adds it to the end of the linked list. If the list is empty, the new node becomes the head of the list. If the list is not empty, the method traverses to the end of the list and appends the new node.

// hasCycle(): This method detects if the linked list contains a cycle. It uses two pointers, slow and fast. Both pointers start at the head of the list. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a cycle, the slow and fast pointers will eventually meet at the same node. If there is no cycle, the fast pointer will reach the end of the list.