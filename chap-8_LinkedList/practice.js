class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traverseInLL(head) {
    let str = "";

    if (!head || head.data === null)
        return null;

    str += head.data;
    while (head.next) {
        str += " > ";
        head = head.next;
        str += head.data;
    }

    console.log(str);
}

function traverseInLL2(head) {
    let str = "";
    if (!head || head.data === null)
        return null;

    while (head) {
        str += head.data;
        if (head.next) str += " ";
        head = head.next;
    }
    console.log(str);
}

function recursiveTraversal(head) {
    let str = { value: "" };


    function inner(head) {
        if (!head || head.data === null)
            return null;
        str.value += head.data;
        if (head.next) str.value += " ";
        inner(head.next);
    }
    inner(head);
    console.log(str.value);
}

function countNodes(head) {
    if (!head || head.data === null) return 0;
    let count = 1;
    while (head.next) {
        count++;
        head = head.next;
    }
    return count;
}

function insertAtEnd(head, x) {
    let tail = new Node(x);
    if (!head || head.data === null)
        return tail;

    let node = head;
    while (node.next) {
        node = node.next;
    }
    node.next = tail;
    return head;
}

function insertAtBegin(head, x) {
    const newHead = new Node(x);
    if (!head || head.data === null)
        return newHead;

    newHead.next = head;
    return newHead;
}

function searchInLL(head, key) {
    if (!head || head.data === null)
        return -1;

    while (head.next !== null) {
        if (head.data === key)
            return true;
        head = head.next;
    }
    return false;
}

function searchInNodeRecursive(head, key) {
    if (!head || head.data === null)
        return false;

    if (head.data === key)
        return true;


    else if (head.next)
        return searchInNodeRecursive(head.next, key);

    else if (head.next === null)
        return false;

}

function findPositionInLL(head, key) {
    let pos = 1;

    while (head) {
        if (head.data === key) {
            return pos;
        }
        else {
            pos++;
            head = head.next;
        }
    }
    return -1;
}

function deleteTail(head) {
    if (!head || head.data === null || head.next === null)
        return null;

    let node = head;
    while (node.next.next !== null) {
        node = node.next;
    }
    node.next = null;
    return head;
}

function deleteLastNode(node) {
    if (!node || node.data === null || node.next === null)
        return null;

    let head = node;
    while (head.next.next !== null) {
        head = head.next;
    }
    head.next = null;
    return node;
}

function sortedInsertInLL(head, x) {
    let node = new Node(x);

    if (!head || head.data === null)
        return node;

    if (x < head.data) {
        node.next = head;
        return node;
    }
    let current = head;
    while (current.next !== null) {
        if (current.next.data < x)
            current = current.next;
        else if (current.data <= x) {
            node.next = current.next;
            current.next = node;
            return head;
        }
    }
    current.next = node;
    return head;
}

function sortedInsertInLL2(head, x) {
    let node = new Node(x);

    if (!head || head.data === null)
        return node;

    if (x < head.data) {
        node.next = head;
        return node;
    }
    let current = head;
    while (current.next !== null && current.next.data < x) {
        current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return head;
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
traverseInLL(head);
traverseInLL2(head);
recursiveTraversal(head);
console.log(countNodes(head));
head = insertAtEnd(head, 100);
recursiveTraversal(head);
head = insertAtBegin(head, 0);
recursiveTraversal(head);

let head2 = insertAtBegin(new Node(null), 9);
recursiveTraversal(head2);

console.log(searchInNodeRecursive(head, 100));
console.log(searchInNodeRecursive(head, 90));
console.log(searchInNodeRecursive(head, 85));
console.log(searchInNodeRecursive(new Node(null), 8));

console.log(findPositionInLL(head, 30));
console.log(findPositionInLL(head, 300));

head = deleteLastNode(head);
recursiveTraversal(head);

head = deleteTail(head);
recursiveTraversal(head);

head = sortedInsertInLL2(head, 45);
recursiveTraversal(head);
head = sortedInsertInLL2(head, 15);
recursiveTraversal(head);
head = sortedInsertInLL2(head, 5);
recursiveTraversal(head);
head = sortedInsertInLL2(head, 10);
recursiveTraversal(head);
head = sortedInsertInLL2(head, -5);
recursiveTraversal(head);
head = sortedInsertInLL2(head, -1);
recursiveTraversal(head);
head = sortedInsertInLL2(head, 100);
recursiveTraversal(head);

let head3 = new Node(7);
head3.next = new Node(7);
head3.next.next = new Node(7);
head3.next.next.next = new Node(7);

let head4 = new Node(6);
head4.next = new Node(2);
head4.next.next = new Node(6);
head4.next.next.next = new Node(3);
head4.next.next.next.next = new Node(4);
head4.next.next.next.next.next = new Node(5);
head4.next.next.next.next.next.next = new Node(6);

