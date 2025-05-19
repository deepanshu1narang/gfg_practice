// queue by algo aggarwal bhai sahb (road side coder)
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(x){
        this.items.push(x);
    }

    dequeue(){
        if(this.isEmpty())
            throw new Error("underflow");

        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(this.isEmpty())
            throw new Error("empty queue");

        return this.items[0];
    }

    size(){
        return this.items.length;
    }
}

// Implementation of Queue using circular Array --- gfg
class CircularQueue{
    constructor(size){
        this.queue = [];
        this.size = size;

        this.front = -1;
        this.rear = -1;
    }

    enqueue(x){
        if((this.rear + 1) % this.size === this.front)
            throw new Error("queue is full");
        
        if(this.front === -1)
            this.front = 0;

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = x;
        this.size++;
    }

    dequeue(){
        if(this.front === -1)
            throw new Error("queue already empty");

        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }

        const dequeuedElement = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        this.size--;
        return dequeuedElement;
    }

    getFront(){
        if(this.front === -1)
            throw new Error("queue is empty");

        return this.queue[this.front];
    }

    isEmpty(){
        return this.front === -1;
    }

    isFull(){
        return (this.rear + 1) % this.size === this.front;
    }
}


// Implementation of Queue using circular Array ---- leetcode que
const MyCircularQueue = function (k){
    // 
}

MyCircularQueue.prototype.enqueue = function(x){}
MyCircularQueue.prototype.dequeue = function(x){}
MyCircularQueue.prototype.front = function(x){}
MyCircularQueue.prototype.rear = function(x){}
MyCircularQueue.prototype.isEmpty = function(x){}
MyCircularQueue.prototype.isFull = function(x){}