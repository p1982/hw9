// Part 1: Data Structure Implementations
class Stack {
    constructor() {
        this.items = [];
    }

    // Adds an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Removes and returns the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Returns the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty() {
        return !this.items.length;
    }
}


// Stack usage demonstration
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20


// Stack

// Purpose: A linear data structure that follows the LIFO (Last In First Out) principle.
// Methods:
// push(element): Adds an element to the top of the stack.
// pop(): Removes and returns the top element of the stack.
// peek(): Returns the top element without removing it.
// isEmpty(): Checks if the stack is empty.
