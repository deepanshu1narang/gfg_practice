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

class CircularQueue {
    constructor(size) {
        // capacity 
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // Enqueue: Adds an element to the rear of the queue
    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full!");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
        console.log(`${element} added to the queue`);
    }

    // Dequeue: Removes and returns the front element of the queue
    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty!");
            return;
        }

        const dequeuedElement = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        console.log(`${dequeuedElement} removed from the queue`);
        return dequeuedElement;
    }

    // Peek: Returns the front element without removing it
    peek() {
        if (this.front === -1) {
            console.log("Queue is empty!");
            return null;
        }

        return this.queue[this.front];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === -1;
    }

    // Check if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // Print the queue elements
    printQueue() {
        if (this.front === -1) {
            console.log("Queue is empty!");
            return;
        }

        let elements = [];
        let i = this.front;
        while (i !== this.rear) {
            elements.push(this.queue[i]);
            i = (i + 1) % this.size;
        }
        elements.push(this.queue[this.rear]);
        console.log("Queue:", elements.join(' -> '));
    }
}

// Example usage:
const queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.printQueue();

queue.dequeue();
queue.dequeue();

queue.printQueue();

queue.enqueue(60);
queue.enqueue(70);

queue.printQueue();

queue.dequeue();

queue.printQueue(); 
