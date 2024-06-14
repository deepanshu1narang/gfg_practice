function selectionSort(arr, n) {
    // n - 1 bcoz when we reach (n - 1) means then last element is already sorted .... even n also won't make any difference but n - 1 shows understanding
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        // j = i+1 bcoz arr[i] (j = i) < arr[i] (minIndex = i) is obvi not possible... then why to have one more iteration
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

let arr = [10, 5, 8, 20, 2, 18];
selectionSort(arr, arr.length);
console.log(arr);