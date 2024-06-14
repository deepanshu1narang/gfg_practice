function someSortTrial(arr, n) {
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] >= arr[j - 1]) {
                break;
            }
            else {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [4, 3, 5, 10, 12, 1, 2, 6];
let x = someSortTrial(arr, arr.length);
console.log(x);
