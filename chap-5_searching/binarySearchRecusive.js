function binSearch(arr, k, low, high) {
    if (low > high)
        return -1;

    let mid = Math.floor((low + high) / 2);
    if (k === arr[mid])
        return mid;
    else if (k < arr[mid])
        return binSearch(arr, k, low, mid - 1);
    else
        return binSearch(arr, k, mid + 1, high);
}

let arr = [10, 20, 30, 40, 50, 60];
let k = 55;
k = 40;
const res = binSearch(arr, k, 0, arr.length - 1);
console.log(res);