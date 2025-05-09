console.log('Stack using array');

class Stack {
    constructor() {
        this.stackMax = Number.MAX_SAFE_INTEGER;
        this.arr = [];
        this.top = -1;
    }

    push(x) {
        this.top++;
        if (this.top > this.stackMax) {
            this.top--;
            throw new Error("Overflow");
        }

        this.arr.push(x);
        return this.top + 1;
    }

    pop() {
        if (this.top < 0)
            throw new Error("Underflow");

        this.top--;
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.top];
        // or return this.arr[this.arr.length - 1]; 
    }

    isEmpty() {
        return this.top === -1;
        // or return this.arr.length === 0;
    }

    size() {
        return this.top + 1;
        // or return this.arr.length;
    }
}

// we can use stack directly with array without creating a class;