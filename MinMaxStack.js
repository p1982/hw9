class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    // Adds an element to the stack
    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        }
    }

    // Removes and returns the top element of the stack
    pop() {
        const value = this.stack.pop();
        if (value === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        if (value === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }
        return value;
    }

    // Returns the minimum element in the stack
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }

    // Returns the maximum element in the stack
    getMax() {
        return this.maxStack[this.maxStack.length - 1];
    }
}

// Min/Max Stack usage demonstration
let minMaxStack = new MinMaxStack();
minMaxStack.push(10);
minMaxStack.push(20);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // 5
console.log(minMaxStack.getMax()); // 20
minMaxStack.pop();
console.log(minMaxStack.getMin()); // 10
console.log(minMaxStack.getMax()); // 20

// Purpose: A stack that supports finding the minimum and maximum elements in constant time.
// Methods:
// push(value): Adds an element to the stack.
// pop(): Removes and returns the top element of the stack.
// getMin(): Returns the minimum element in the stack.
// getMax(): Returns the maximum element in the stack.
