function binSearch(arr, k) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    // let mid = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (k === arr[mid])
            return mid;
        else if (k < arr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50, 60];
let k = 20;
// k = 40;
const res = binSearch(arr, k);
console.log(res);