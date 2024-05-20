class Queue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Removes and returns the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Returns the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Checks if the queue is empty return boolean if queue is empty
    isEmpty() {
        return !this.items.length;
    }
}

// Queue usage demonstration
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20

// Queue

// Purpose: A linear data structure that follows the FIFO (First In First Out) principle.
// Methods:
// enqueue(element): Adds an element to the end of the queue.
// dequeue(): Removes and returns the front element of the queue.
// peek(): Returns the front element without removing it.
// isEmpty(): Checks if the queue is empty.
