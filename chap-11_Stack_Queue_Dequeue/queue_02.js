console.log("Queue using map/object");

class Queue {
    constructor() {
        // this.que = new Map();
        this.que = {};
        this.front = -1;
        this.rear = -1;
    }

    enqueue(x) {
        if (this.front === -1)
            this.front++;

        this.rear++;
        // this.que.set(this.rear, x);
        this.que[this.rear] = x;
    }
    dequeue() {
        if (this.front === -1) {
            return null;
        }
        let res = this.que[this.front];
        delete this.que[this.front];
        this.front++;
        if (this.front > this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        return res;
    }
    size() {
        return this.rear - this.front + 1;
    }
    getFront() {
        if (this.rear >= this.front)
            return this.que.get(this.front);
        else
            return null;
    }
    getRear() {
        if (this.rear > -1)
            return this.que[this.rear];
        else
            return null;
    }
    isEmpty() {
        return this.front === -1;
    }
}