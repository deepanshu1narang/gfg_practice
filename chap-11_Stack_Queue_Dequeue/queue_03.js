console.log("Implementation of Queue using circular Array");

class Queue {
    constructor(cap) {
        this.cap = cap;
        this.arr = new Array(cap);
        this.len = 0;
        this.front = 0;
        this.rear = 0;
    }

    enqueue(x) {
        if (this.len === this.cap) {
            throw new Error("capacity already full");
        }
        this.arr[this.rear] = x;
        this.rear = (this.rear + 1) % this.cap;
        this.len++;
    }

    dequeue() {
        let res = this.arr[this.front]
        this.arr[this.front] = null;
        this.front = (this.front + 1) % this.cap;
        this.len--;
        return res;
    }
    getFront() {
        if (this.len === 0) return null;

        return this.arr[this.front];
    }
    getRear() {
        if (this.len === 0) return null;

        return this.arr[this.rear];
    }
    size() {
        return this.rear - this.front + 1;
    }
    isEmpty() {
        return this.len;
    }
}

const q1 = new Queue(5);