function findLargestElementIndex(arr, n) {
    let largestElementIndex = 0;
    let max = arr[0];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < arr[i + 1] && arr[i + 1] > max) {
            max = arr[i + 1];
            largestElementIndex = i + 1;
        }
    }
    return largestElementIndex;
}

let arr = [10, 5, 20, 8];
console.log(findLargestElementIndex(arr, arr.length));
arr = [30];
console.log(findLargestElementIndex(arr, arr.length));
arr = [20, 8, 40, 10, 40];
console.log(findLargestElementIndex(arr, arr.length));
arr = [20, 48, 40, 10, 40];
console.log(findLargestElementIndex(arr, arr.length));
// const size = arr.length;

function findLargestElementIndex2(arr, size) {
    let start = 0;
    let end = size - 1;
    const mid = Math.floor((start + end) / 2);
    let largestElementIndex = mid;
    let max = arr[mid];
    while (start < end) {
        if (arr[start] < arr[end]) {
            if (arr[end] > max && largestElementIndex > end) {
                max = arr[end];
                largestElementIndex = end;
            }
        }
        else {
            if (arr[start] > max) {
                max = arr[start];
                largestElementIndex = start;
            }
        }
        start++;
        end--;
    }
    return largestElementIndex;
}

console.log("//////////////////////");
let arr2 = [10, 5, 20, 8];
console.log(findLargestElementIndex2(arr2, arr2.length));
arr2 = [30];
console.log(findLargestElementIndex2(arr2, arr2.length));
arr2 = [20, 8, 40, 10, 40];
console.log(findLargestElementIndex2(arr2, arr2.length));
arr2 = [20, 48, 40, 10, 40];
console.log(findLargestElementIndex2(arr2, arr2.length));

console.log("//////////////////////");

function findLargestElementIndex3(arr, size) {
    let res = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] > arr[res])
            res = i;
    }
    return res;
}