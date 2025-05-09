class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    traverseLLIterative(node) {
        let str = "";

        while (node && node.data !== null) {
            str += node.data;
            if (node.next) str += " -> ";
            node = node.next;
        }
        console.log(str);
    }

    traverseLLRecursive(node) {
        let str = { x: "" };

        function inner(node) {
            str.x += node.data;
            if (node.next) {
                str.x += " -> ";
                inner(node.next);
            }
            else
                return;
        }
        inner(node);
        return str.x;
    }

    traverseLLRecursive2() {
        let node = this;
        let str = { x: "" };

        function inner(node) {
            str.x += node.data;
            if (node.next) {
                str.x += " -> ";
                inner(node.next);
            }
            else
                return;
        }
        inner(node);
        return str.x;
    }

    deleteNode() { }

    insertAtEnd(x) {
        let tail = new Node(x);
        let node = this;
        if (!node || node.data === undefined || node.data === null) {
            return tail;
        }
        let curr = node;
        while (curr && curr.next !== null) {
            curr = curr.next;
        }
        curr.next = tail;
        return node;
    }

    insertAtBegin(x) {
        let newHead = new Node(x);
        if (!this || this.head === null || this.head === undefined) {
            return newHead;
        }
        newHead.next = this;
        return newHead;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);
head.next.next.next.next.next.next.next = new Node(80);
head.next.next.next.next.next.next.next.next = new Node(90);

console.log(head);
head.traverseLLIterative(head);
console.log(head.traverseLLRecursive(head));
console.log(head.traverseLLRecursive2());

head = head.insertAtBegin(0);
console.log(head);

head = head.insertAtEnd(100);
head.traverseLLIterative(head);
head = head.insertAtEnd(110);
head.traverseLLIterative(head);
// console.log(head);

let temp = new Node();
temp = temp.insertAtEnd(3);
console.log(temp);

let temp2 = new Node();
temp2 = temp.insertAtBegin.call(temp2, 9);
console.log(temp2);