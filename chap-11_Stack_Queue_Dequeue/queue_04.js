console.log("Queue using Linked List");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.len = 0;
    }

    enqueue(x) {
        let temp = new Node(x);

        if (!this.front) this.front = temp;
        else this.rear.next = temp;

        this.rear = temp;
        this.len++;
    }

    dequeue() {
        if (!this.front) this.front = null;

        let res = this.front.data;
        this.front = this.front.next;
        this.len--;
        return res;
    }

    isEmpty() {
        return this.len === 0;
    }

    size() {
        return this.len;
    }
}