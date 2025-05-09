console.log("Implementation of Stack using Linked List");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(x) {
        let temp = new Node(x);
        temp.next = this.head;
        this.head = temp;
        this.size++;
    }

    pop() {
        if (this.head === null)
            return null;

        let res = this.head.data;
        this.head = this.head.next;
        this.size--;
        return res;
    }

    peek() {
        if (this.head === null)
            return null;

        return this.head.data;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        // return this.size === 0;
        return this.head === null;
    }
}