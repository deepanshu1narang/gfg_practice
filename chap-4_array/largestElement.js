function findLargestElement(arr, n) {
    let max = arr[0];
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { max, largestElementIndex };
}

let arr = [10, 5, 20, 8];
arr = [30];
arr = [20, 8, 40, 10, 40];
const size = arr.length;
console.log(findLargestElement(arr, size));