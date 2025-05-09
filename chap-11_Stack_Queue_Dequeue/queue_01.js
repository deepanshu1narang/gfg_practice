console.log("Queue using Array");

class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(x) {
        this.arr.push(x);
        return this.arr.size();
    }
    dequeue() {
        return this.arr.shift();
    }
    size() {
        return this.arr.length;
    }
    getFront() {
        return this.arr[0];
    }
    getRear() {
        return this.arr[this.arr.length - 1];
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}
