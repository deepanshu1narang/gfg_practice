function getLastOccurrence(arr, k) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    // let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (k === arr[mid]) {
            if (mid === n - 1 || arr[mid + 1] !== k)
                return mid;
            else {
                low = mid + 1;
            }
        }
        else if (k < arr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

let arr = [1, 10, 10, 10, 20, 20, 40];
const x2 = getLastOccurrence(arr, 10);
console.log(x2);