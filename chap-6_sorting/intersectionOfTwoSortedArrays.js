document.write("intersection of two sorted arrays");

function intersectionOfTwoSortedArraysNaive(arr1, arr2) {
    const n1 = arr1.length;
    const set2 = new Set(arr2);

    let common = new Set();
    for (let i = 0; i < n1; i++) {
        if (set2.has(arr1[i])) {
            common.add(arr1[i]);
        }
    }

    return Array.from(common);
}

let arr1 = [3, 4, 10, 10, 10, 15, 15, 20];
let arr2 = [5, 10, 10, 15, 30];
console.log(intersectionOfTwoSortedArraysNaive(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [1, 1, 1, 3, 5];
console.log(intersectionOfTwoSortedArraysNaive(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [2, 2, 4, 6];
console.log(intersectionOfTwoSortedArraysNaive(arr1, arr2));

function intersectionOfTwoSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let common = [];
    while (i < arr1.length) {
        const cond1 = i > 0 && arr1[i] === arr1[i - 1];
        const cond2 = j > 0 && arr2[j] === arr2[j - 1];
        if (cond1 || cond2) {
            if (cond1)
                i++;
            if (cond2)
                j++;
        }
        else {
            if (arr1[i] > arr2[j])
                j++;
            else if (arr1[i] < arr2[j])
                i++;
            else if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
                i++;
                j++;
            }
        }
        if (j === arr2.length)
            break;
    }
    return common;
    // if(i > 0 && arr1[i] === arr2[])
}
arr1 = [3, 4, 10, 10, 10, 15, 15, 20];
arr2 = [5, 10, 10, 15, 30];
console.log(intersectionOfTwoSortedArrays(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [1, 1, 1, 3, 5];
console.log(intersectionOfTwoSortedArrays(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [2, 2, 4, 6];
console.log(intersectionOfTwoSortedArrays(arr1, arr2));

// using BInary Search
function intersectionOfTwoSortedArraysUsingBinarySearch(arr1, arr2) {

    const n1 = arr1.length;
    const n2 = arr2.length;

    const larger = n1 > n2 ? arr1 : arr2;
    const smaller = n2 > n1 ? arr1 : arr2;
    let common = [];

    Array.prototype.binarySearch = function (target) {
        let low = 0;
        let high = this.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this[mid] === target)
                return true;
            else if (this[mid] < target)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return false;
    }

    for (let i = 0; i < smaller.length; i++) {
        if (i > 0 && smaller[i] === smaller[i - 1])
            continue;
        if (larger.binarySearch(smaller[i])) {
            common.push(smaller[i]);
        }
    }

    return common;
}

arr1 = [3, 4, 10, 10, 10, 15, 15, 20];
arr2 = [5, 10, 10, 15, 30];
console.log(intersectionOfTwoSortedArraysUsingBinarySearch(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [1, 1, 1, 3, 5];
console.log(intersectionOfTwoSortedArraysUsingBinarySearch(arr1, arr2));

arr1 = [1, 1, 3, 3, 3];
arr2 = [2, 2, 4, 6];
console.log(intersectionOfTwoSortedArraysUsingBinarySearch(arr1, arr2));

function findUnion(arr1, arr2, n, m) {
    //your code here
    let i = 0;
    let j = 0;
    let union = new Array();

    while (i < n && j < m) {
        const cond1 = i > 0 && arr1[i] === arr1[i - 1];
        const cond2 = j > 0 && arr2[j] === arr2[j - 1];
        if (cond1 || cond2) {
            if (cond1)
                i++;
            if (cond2)
                j++;
            continue;
        }
        else {
            if (arr1[i] === arr2[j]) {
                union.push(arr1[i]);
                i++;
                j++;
            }
            else if (arr1[i] < arr2[j]) {
                union.push(arr1[i]);
                i++;
            }
            else {
                union.push(arr2[j]);
                j++;
            }
        }
    }
    while (i < n) {
        if (arr1[i] !== arr1[i - 1])
            union.push(arr1[i]);
        i++;
    }
    while (j < m) {
        if (arr2[j] !== arr2[j - 1])
            union.push(arr2[j]);
        j++;
    }
    return union;
}

console.log(findUnion(arr1, arr2, arr1.length, arr2.length));