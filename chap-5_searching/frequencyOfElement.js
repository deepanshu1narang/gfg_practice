function getFirstOccurrence(arr, k) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    // let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (k === arr[mid]) {
            if (mid === 0 || arr[mid - 1] !== k)
                return mid;
            else {
                high = mid - 1;
            }
        }
        else if (k < arr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

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

function count(arr, k) {
    const firstOccurrence = getFirstOccurrence(arr, k);
    if (firstOccurrence === -1)
        return 0;
    const lastOccurrence = getLastOccurrence(arr, k);
    return lastOccurrence - (firstOccurrence - 1);
}

let arr = [10, 20, 20, 20, 20, 40];
console.log(count(arr, 20));