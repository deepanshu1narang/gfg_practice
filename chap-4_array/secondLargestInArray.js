function secondLargest(arr, size) {
    if (size === 1)
        return;

    let largest = arr[0];
    let secondLargest = arr[1];
    if (arr[1] > arr[0])
        [largest, secondLargest] = [secondLargest, largest];

    for (let i = 2; i < size; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

function secondLargestIndex(arr, size) {
    if (size === 1)
        return;

    let largest = 0;
    let secondLargest = 1;
    if (arr[1] > arr[0])
        [largest, secondLargest] = [secondLargest, largest];

    for (let i = 2; i < size; i++) {
        if (arr[i] > arr[largest]) {
            secondLargest = largest;
            largest = i;
        }
        else if (arr[i] > arr[secondLargest]) {
            secondLargest = i;
        }
    }
    return secondLargest;
}

console.log(secondLargest([10, 12, 20, 4], 4));
console.log(secondLargestIndex([10, 12, 20, 4], 4));