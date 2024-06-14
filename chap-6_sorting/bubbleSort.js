function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

let arr = [10, 8, 20, 5];
bubbleSort(arr, arr.length);
console.log(arr);

Array.prototype.isSorted = isSorted;
Array.prototype.isSortedReverse = isSortedReverse;
Array.prototype.myReverse = myReverse;

function isSorted() {
    const n = this.length;
    for (let i = 1; i < n; i++) {
        if (this[i] < this[i - 1])
            return false;
    }
    return true;
}

function isSortedReverse() {
    const n = this.length;
    for (let i = 1; i < n; i++) {
        if (this[i] > this[i - 1])
            return false;
    }
    return true;
}

function myReverse() {
    const n = this.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        [this[low], this[high]] = [this[high], this[low]];
        low++;
        high--;
    }
}

function bubbleSort2(arr, n) {
    if (!arr.isSorted()) {
        if (arr.isSortedReverse())
            arr.myReverse()
        else
            bubbleSort(arr, n);
    }
}

arr = [24, 15, 7, 2];
arr = [24, 115, 37, 322];
// console.log(arr.isSorted());
bubbleSort2(arr, arr.length);
console.log(arr);

// optimised w/o other function
function bubbleSort3(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
arr = [10, 18, 20, 25];
bubbleSort3(arr, arr.length);
console.log(arr);