function moveZeroesToEnd(arr, size) {
    let arr1 = [];
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] !== 0) {
            arr1.push(arr[i]);
            count++;
        }
    }
    for (; count < size; count++) {
        arr1.push(0);
    }
    return arr1;
}

let arr = [8, 0, 5, 0, 0, 7];
console.log(moveZeroesToEnd(arr, arr.length));

function moveZeroesToEnd3(arr, size) {
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
    return arr;
}

arr = [8, 0, 5, 0, 9, 0, 0, 0, 7];
console.log(moveZeroesToEnd3(arr, arr.length));