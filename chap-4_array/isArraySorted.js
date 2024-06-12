// fro non-decreasing order only
function isArraySorted(arr, size) {
    if (size === 0) return false;
    else if (size === 1) return true;
    for (let i = 0; i < size - 1; i++) {
        if (arr[i] > arr[i + 1])
            return false;
    }
    return true;
}

let arr = [8, 10, 2, 15, 16];
console.log(isArraySorted(arr, arr.length));

function isSorted(arr, size) {
    for (let i = 1; i < size; i++) {
        if (arr[i] < arr[i - 1])
            return false;
    }
    return true;
}