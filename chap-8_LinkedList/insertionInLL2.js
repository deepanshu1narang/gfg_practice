class Node {
    constructor(data) {
        this.data = data;
        this.val = data;
        this.next = null;
    }
}

function traverseLLIterative(node) {
    let str = "";

    // while (node && node.data !== null) {
    while (node) {
        str += node.data;
        if (node.next) str += " -> ";
        node = node.next;
    }
    console.log(str);
}

function traverseLLRecursive(node) {
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
    console.log(str.x);
    return str.x;
}


function deleteFirstNode(node) {
    if (node === null || node.data === null || node.next === null) {
        return new Node(null);
    }
    return node.next;
}

function insertAtEnd(node, x) {
    let tail = new Node(x);
    if (!node || node.data === undefined || node.data === null) {
        return tail;
    }
    let current = node;
    while (current && current.next !== null) {
        current = current.next;
    }
    current.next = tail;
    return node;
}

function insertAtBegin(node, x) {
    let newHead = new Node(x);
    if (!node || node.data === null || node.data === undefined) {
        return newHead;
    }
    newHead.next = node;
    return newHead;
}

function insertAtPos(head, data, pos) {
    let k = 0;
    let node = head;
    let targetIdx = pos - 2;
    while (k < targetIdx && node.next) {
        k++;
        node = node.next;
    }
    if (k < targetIdx)
        return head;

    if (pos === 1) {
        let newHead = new Node(data);
        newHead.next = head;
        return newHead;
    }
    let addedNode = new Node(data);
    addedNode.next = node.next;
    node.next = addedNode;
    return head;
}

function insertAtPos2(head, data, position) {
    let node = new Node(data);
    if (!head) return node;

    if (position === 1) {
        node.next = head;
        return node;
    }

    let step = 0;
    let prevNode = new Node(null);
    let current = head;

    while (current) {
        step++;

        if (step === position) {
            node.next = current;
            prevNode.next = node;
            break;
        }
        prevNode = current;
        current = current.next;
    }
    if (step < position)
        prevNode.next = node;

    return head;
}

function searchInLL(node, x) {
    let pos = 1;
    // while(node) --- bcoz we're doing node = node.next and at tail point node.next will become null is till we reach the tail
    while (node) {
        if (node.data === x) {
            return pos;
        }
        else {
            pos++;
            node = node.next;
        }
    }
    return -1;
}

function searchInLLrecursive(node, x, k) {
    // let pos = { value: -1 };
    if (!k || k <= 1) k = 1;
    if (!node) {
        return -1;
    }
    else if (node.data === x) {
        return k;
    }
    // pos.value++;
    k++;
    return searchInLLrecursive(node.next, x, k);
}

function LLsearchRecursive(node, x) {
    if (!node) return -1;
    else if (node.data === x) return 1;
    else {
        let res = LLsearchRecursive(node.next, x);
        if (res === -1) return -1;
        else return res + 1;
    }
}

function getMiddleNode2(node) {
    if (!node) return null;

    let head = node;
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    head = node;
    for (let i = 0; i < Math.floor(count / 2) + 1; i++) {
        head = head.next;
    }
    return head.data;
}

// without finding the count of all nodes present in the given reference... Tortoise Hare Method
function getMiddleNode(head) {
    if (!head) return null;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function deleteLastNode(node) {
    let head = node;
    while (head.next.next !== null) {
        head = head.next;
    }
    head.next = null;
    return node;
}

function deleteTail(head) {
    if (head === null) return null;
    if (head.next === null) {
        delete (head);
        return null;
    }
    let current = head;
    while (current.next.next !== null)
        current = current.next;
    delete (current.next);
    current.next = null;
    return head;
}

function sortedInsertInLL(node, x) {
    let insertedNode = new Node(x);
    if (node === null) {
        return insertedNode;
    }
    else if (x <= node.data) {
        insertedNode.next = node;
        return insertedNode;
    }
    let prevNode;
    let current = node;
    while (current) {
        if (current.data < x) {
            prevNode = current;
            current = current.next;
        }
        else {
            insertedNode.next = current;
            prevNode.next = insertedNode;
            break;
        }
    }
    if (current === null) {
        prevNode.next = new Node(x);
    }
    return node;
}

function sortedInsertInLL2(node, x) {
    let temp = new Node(x);
    if (node === null) return temp;
    else if (x < node.data) {
        temp.next = node;
        return temp;
    }
    let current = node;
    while (current.next !== null && current.next.data < x) {
        current = current.next;
    }
    temp.next = current.next;
    current.next = temp;
    return node;
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

function deleteKthNode(head, k) {
    if (!head || head.data === null) return null;
    if (k === 1)
        return head.next;

    let position = 1;
    let current = head;
    while (current) {
        if (position === k - 1) {
            current.next = current.next.next;
            break;
        }
        else {
            current = current.next;
            position++;
        }
    }
    return head;
}

function deleteKthNode2(head, k) {
    if (!head || head.data === null) return null;
    if (k === 1)
        return head.next;

    let step = 0;
    let current = head;
    let prevNode = new Node(null);
    while (current) {
        step++;
        if (step === k) {
            prevNode.next = prevNode.next.next;
        }

        prevNode = current;
        current = current.next;
    }
    return head;
}

function deleteNodeByValue(head, value) {
    if (!head || head.data === null) return null;

    if (head.data === value)
        return head.next;

    let current = head;
    let prevNode = new Node(null);
    while (current) {
        if (current.data === value) {
            prevNode.next = prevNode.next.next;
        }
        prevNode = current;
        current = current.next;
    }
    return head;
}

function printNthNodeFromEndNaive(head, n) {
    if (!head || head.data === null) return null;

    let count = 0;
    let arr = [];
    while (head.next) {
        count++;
        arr.push(head.data);
        head = head.next;
    }

    return arr[count - n + 1];
}

function printNthNodeFromEnd(head, n) {
    if (!head) return null;

    let fast = head;
    for (let i = 0; i < n; i++) {
        if (!fast) return null;
        fast = fast.next;
    }

    let slow = head;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.data;
}

function modifiedList2(nums, head) {
    let dummyNode = new Node(-1);
    let realIterator = dummyNode;
    nums = new Set(nums);

    let current = head;
    while (current) {
        if (!nums.has(current.data)) {
            realIterator.next = current;
            realIterator = realIterator.next;
        }
        current = current.next;
    }
    realIterator.next = null;
    return dummyNode.next;
};

const modifiedList = function (nums, head) {
    if (!head) return null;

    let prevNode = null;
    let current = head;
    nums = new Set(nums);
    while (current) {
        if (nums.has(current.data)) {
            if (!prevNode) {
                current = current.next;
                head = head.next;
                continue;
            }
            else {
                prevNode.next = current.next;
            }
        }
        prevNode = current;
        current = current.next;
    }
    return head;
};

function reverseLLnaive(head) {
    if (!head) return null;
    if (!head.next) return head;

    let arr = [];

    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    // head.data = arr[arr.length - 1];
    let result = new Node(Number.MAX_SAFE_INTEGER);
    let current2 = result;
    for (let i = arr.length - 1; i >= 0; i--) {
        current2.next = new Node(arr[i]);
        current2 = current2.next;
    }
    return result.next;
}

function reverseLLIterative(head) {
    if (!head || !head.next) return head;

    let back = null;

    let current = head;
    while (current) {
        let front = current.next;
        current.next = back;
        back = current;
        current = front;
    }
    return back;
}

function reverseLLRecursive(head) {
    if (!head || !head.next) return head;

    function inner(current, back, front) {
        if (!current) return back;

        front = current.next;
        current.next = back;
        back = current;
        current = front;

        return inner(current, back, front);
    }

    let current = head;
    return inner(current, null, null);
};

function reverseLLRecursive2(head) {
    if (!head || !head.next) return head;

    let nextNode = head.next;
    head.next = null;

    let newHead = reverseLLRecursive2(nextNode);
    nextNode.next = head;

    return newHead;
}

function detectLoopNaive(head) {
    // (m: Node): boolean
    if (!head || !head.next) return false;

    let current = head;
    let llMap = new Map();
    let k = 0;
    while (current) {
        if (llMap.has(current))
            return true;

        k++;
        llMap.set(current, k);
        current = current.next;
    }
    return false;
};

// tortoise and hare method ---- basically slow and fast pointer
function detectLoop(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast)
            return true;
    }
    return false;
}

function isPalindrome(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    // let midNode = null;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // midNOde is slow

    function reverseLL(head) {
        if (!head) return null;

        let back = null;
        let current = head;
        while (current) {
            let front = current.next;
            current.next = back;
            back = current;
            current = front;
        }
        return back;
    }

    let reversed = reverseLL(slow);

    current = head;
    // console.log(head);
    while (reversed) {
        if (current !== reversed) {
            console.log(current, reversed);
            return false;
        }
        current = current.next;
        reversed = reversed.next;
    }
    return true;
};

function removeNthNodeFromEnd(head, n) {
    if (!head) return head;

    function getNthElementFromEnd(head, n) {
        let slow = head;
        let fast = head;

        for (let i = 0; i < n; i++) {
            if (!fast) return null;
            fast = fast.next;
        }

        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

    const nodeToRemove = getNthElementFromEnd(head, n);

    let dummyNode = new Node(-7);
    let result = dummyNode;

    let current = head;
    while (current) {
        if (current !== nodeToRemove) {
            result.next = current;
            result = result.next;
        }
        else if (n === 1) {
            result.next = null;
        }
        current = current.next;
    }
    return dummyNode.next;
};

function addOne(node) {
    // your code here
    if (!node) return 1;

    let prev = null;
    let current = node;
    let positions = new Set();
    let k = 0;

    while (current) {
        k++;
        if (current.data === 9) {
            positions.add(k);
        }
        else {
            positions.clear();
        }
        // prev = current;
        current = current.next;
    }
    if (positions.size === 0) {
        prev.data += 1;
        return node;
    }
    else {
        if (positions.has(1)) {
            let h1 = new Node(1);
            let current = node;
            while (current) {
                current.data = 0;
                current = current.next;
            }
            h1.next = node;
            return h1;
        }
        else {
            let x = [...positions][0];
            let current = node;
            for (let i = 1; i <= k; i++) {
                if (i === x - 1) {
                    current.data += 1;
                }
                else if (i >= x) {
                    current.data = 0;
                }
                current = current.next;
            }
            return node;
        }
    }
    return node;
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
traverseLLIterative(head);
console.log(traverseLLRecursive(head));

head = insertAtBegin(head, 0);
console.log(head);

head = insertAtEnd(head, 100);
traverseLLIterative(head);
head = insertAtEnd(head, 110);
traverseLLIterative(head);
// console.log(head);

let temp = new Node();
temp = insertAtEnd(temp, 3);
console.log(temp);

let temp2 = new Node();
temp2 = insertAtBegin(temp2, 9);
console.log(temp2);

console.log("before deletion");
console.log(head);
traverseLLIterative(head);
head = deleteFirstNode(head);
traverseLLIterative(head);
console.log("afer deletion");
console.log(head);

head = insertAtPos(head, 56, 5);
traverseLLIterative(head);
console.log(head);
head = insertAtPos(head, 156, 2);
traverseLLIterative(head);
console.log(head);
head = insertAtPos(head, 65, 1);
traverseLLIterative(head);
console.log(head);
head = insertAtPos(head, 695, 19);
traverseLLIterative(head);
console.log(head);

console.log(searchInLL(head, 10));
console.log(searchInLL(head, 110));
console.log(searchInLL(head, 56));
console.log(searchInLL(head, 65));
console.log(searchInLL(head, 986));
console.log("recursive search");
console.log(searchInLLrecursive(head, 10));
console.log(searchInLLrecursive(head, 110));
console.log(searchInLLrecursive(head, 56));
console.log(searchInLLrecursive(head, 65));
console.log(searchInLLrecursive(head, 986));
console.log("recursive search ");
console.log(LLsearchRecursive(head, 10));
console.log(LLsearchRecursive(head, 110));
console.log(LLsearchRecursive(head, 56));
console.log(LLsearchRecursive(head, 65));
console.log(LLsearchRecursive(head, 986));

head = insertAtEnd(head, 912);
traverseLLIterative(head);
console.log(getMiddleNode2(head), "naive");
console.log(getMiddleNode(head), "tortoise-hare");

head = deleteLastNode(head);
traverseLLIterative(head);

head = deleteTail(head);
traverseLLIterative(head);

console.log("head2");

let head2 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head2, 10 * i);
}
console.log(head2);
traverseLLIterative(head2);

head2 = sortedInsertInLL2(head2, 25);
traverseLLIterative(head2);
head2 = sortedInsertInLL2(head2, 100);
traverseLLIterative(head2);
head2 = sortedInsertInLL2(head2, 11);
traverseLLIterative(head2);
head2 = sortedInsertInLL2(head2, 5);
traverseLLIterative(head2);
head2 = sortedInsertInLL2(head2, 50);
traverseLLIterative(head2);

console.log("head3");
let head3 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head3, 10 * i);
}
console.log(head3);
traverseLLIterative(head3);

head3 = sortedInsertInLL(head3, 25);
traverseLLIterative(head3);
head3 = sortedInsertInLL(head3, 100);
traverseLLIterative(head3);
head3 = sortedInsertInLL(head3, 11);
traverseLLIterative(head3);
head3 = sortedInsertInLL(head3, 5);
traverseLLIterative(head3);
head3 = sortedInsertInLL(head3, 50);
traverseLLIterative(head3);

console.log("printNthNodeFromEndNaive");
console.log("printNthNodeFromEnd");
traverseLLIterative(head);
console.log(printNthNodeFromEndNaive(head, 4));
console.log(printNthNodeFromEnd(head, 4));

traverseLLIterative(head3);
head3 = deleteKthNode(head3, 14);
head3 = deleteKthNode2(head3, 7);
head3 = deleteNodeByValue(head3, 20);
traverseLLIterative(head3);
head3 = insertAtPos2(head3, 7, 2);
head3 = insertAtPos2(head3, 3, 17);
traverseLLIterative(head3);
head3 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head3, 10 * i);
}
let h4 = reverseLLnaive(head3);
console.log("naive");
traverseLLIterative(h4);
head3 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head3, 10 * i);
}
let h5 = reverseLLIterative(head3);
console.log("iterative");
traverseLLIterative(h5);
head3 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head3, 10 * i);
}
console.log("recursive");
let h6 = reverseLLRecursive(head3);
traverseLLIterative(h6);
head3 = new Node(10);
for (let i = 2; i < 10; i++) {
    insertAtEnd(head3, 10 * i);
}
console.log("recursive2");
let h7 = reverseLLRecursive2(head3);
traverseLLIterative(h7);

const headQues = new Node(1);
headQues.next = new Node(2);
headQues.next.next = new Node(3);
headQues.next.next.next = new Node(4);
headQues.next.next.next.next = new Node(5);
headQues.next.next.next.next.next = new Node(1);



let headQues2 = modifiedList2([1, 2, 3], headQues);
console.log(headQues2);

let headWithLoop = new Node(1);
let t1 = new Node(11);
let t2 = new Node(21);
let t3 = new Node(31);
let t4 = new Node(41);
let t5 = new Node(51);

headWithLoop.next = t1;
t1.next = t2;
t2.next = t3;
t3.next = t4;
t4.next = t5;
console.log(detectLoopNaive(headWithLoop));
t5.next = t3;
console.log(detectLoopNaive(headWithLoop));

function createLLFromArray(arr) {
    let head = new Node(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        insertAtEnd(head, arr[i]);
    }
    return head;
}

let testNode = createLLFromArray([1, 1, 2, 1]);
console.log(testNode);
traverseLLRecursive(testNode);
console.log(isPalindrome(createLLFromArray([1, 2, 2, 1])));

console.log(removeNthNodeFromEnd(createLLFromArray([1, 2, 3, 4, 5]), 2));
console.log(removeNthNodeFromEnd(createLLFromArray([1]), 1));
console.log(removeNthNodeFromEnd(createLLFromArray([1, 2]), 1));

let testNode2 = createLLFromArray([1, 3, 6, 3, 9]);
traverseLLIterative(testNode2);
testNode2 = addOne(testNode2);
traverseLLIterative(testNode2);