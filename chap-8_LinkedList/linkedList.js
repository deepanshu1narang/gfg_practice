class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

let t1 = new Node(11);
let t2 = new Node(21);
let t3 = new Node(31);

t1.next = t2;
t2.next = t3;

// insert 41 after 11

let t4 = new Node(41);
t4.next = t2;
t1.next = t4;

let head1 = t1;

console.log(t1);

// traversing a linked list

function traverseWrapper(node) {
    let res = "";

    function traverseLL(node) {
        // console.log(node.data);
        res += node.data;
        if (node.next) {
            res += " -> ";
            traverseLL(node.next);
        }
        else
            return;
    }
    traverseLL(node);
    if (!res) res = "";
    console.log(res);
}

traverseWrapper(t1);
traverseWrapper(head);
