class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const node2 = new Node(200, null);
// const node1 = new Node(100, node2);
// const node3 = new Node(150, null);
// console.log(node1);
// console.log(node1.next);
// node1.next = node3;
// console.log(node1);
// console.log(node2);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // methods
    // 1. insert 1st node
    insertHead(data) {
        this.head = new Node(data, this.head);
        this.size += 1;
    }
    // 2. insert last node
    insertTail(data) {
        let tail = new Node(data);
        if (!this.head) {
            this.head = tail;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = tail;
        }
        this.size += 1;
    }
    // 3. insert at index
    insertNode(data, index) {
        index--;
        let current = this.head;
        if (index >= this.size - 1) {
            this.insertTail(data);
        }
        else if (index <= 0) {
            this.insertHead(data);
        }
        else {
            // let node = new Node(data, next);
            for (let i = 0; i <= index; i++) {
                //  
                if (i === index) {
                    let prevNode = current;
                    let nextNode = current.next;
                    const node = new Node(data, nextNode);
                    prevNode.next = node;
                }
                else
                    current = current.next;
            }
        }
        this.size++;
    }
    // 4. get at index
    // 5.remove at index
    // 6. clear list
    // 7. print list data
    printData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll1 = new LinkedList();
ll1.insertHead(100);
ll1.insertHead(200);
ll1.insertHead(300);
ll1.insertTail(400);
ll1.insertNode(150, 2);
console.log(ll1);
ll1.printData();

const ll2 = new LinkedList();
ll2.insertTail(125);
ll2.insertTail(25);
console.log(ll2);