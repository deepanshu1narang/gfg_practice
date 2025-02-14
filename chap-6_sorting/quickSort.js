
function lomutoPartition(arr, low, high) {
    const pivot = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}

function quickSortLomuto(arr, low, high) {
    if (low < high) {

        const partitionIndex = lomutoPartition(arr, low, high);

        quickSortLomuto(arr, low, partitionIndex - 1);
        quickSortLomuto(arr, partitionIndex + 1, high);
    }
}

arr = [8, 4, 7, 9, 3, 10, 5];
quickSortLomuto(arr, 0, arr.length - 1);
console.log(arr);

function hoaresPartition(arr, l, h) {
    let pivot = arr[l];
    let i = l - 1, j = h + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i >= j) return j;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quickSortHoares(arr, l, h) {
    if (l < h) {
        let p = hoaresPartition(arr, l, h);
        arr = quickSortHoares(arr, l, p);
        arr = quickSortHoares(arr, p + 1, h);
    }
    return arr;
}
arr = [8, 4, 7, 9, 3, 10, 5];

let n = arr.length;

arr = quickSortHoares(arr, 0, n - 1);
console.log(arr);

function linearProbing(hashSize, arr, sizeOfArray) {
    //your code here
    let hashTable = new Array(hashSize).fill(-1);
    // let indexTable = new Map();  
    for (let i = 0; i < sizeOfArray; i++) {
        let idx = arr[i] % hashSize;
        if (hashTable[idx] === -1) {
            hashTable[idx] = arr[i];
        }
        else {
            let count = 1;
            while (hashTable[idx] !== -1) {
                idx = (arr[i] + count) % hashSize;
                count++;
            }
            hashTable[idx] = arr[i];
        }
    }
    console.log(hashTable);
}

linearProbing(10, [9, 99, 999, 9999], 4)