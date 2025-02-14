console.log("Implementation of Queue using circular Array");

class Queue {
    constructor(cap) {
        this.cap = cap;
        this.arr = new Array(cap);
        this.len = 0;
    }
    front = 0;
    back = 0;

    enqueue(x) {
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
        return this.arr[this.front];
    }
    getRear() {
        return this.arr[this.rear];
    }
    size() {
        return this.rear - this.front + 1;
    }
    isEmpty() {
        return this.len;
    }
}