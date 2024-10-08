function maxIndexDiff(arr, n) {
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        let idx = arr.findLastIndex(e => e > arr[i]);
        if (idx - i > maxDiff)
            maxDiff = idx - i;
    }
    return maxDiff;
}

function maxIndexDiff2(arr, n) {
    let maxDiff = 0;
    let start = 0;
    let end = n - 1;
    while (start <= end) {
        if (arr[end] >= arr[start] && end - start > maxDiff) {
            maxDiff = end - start;
            start++;
            end = n - 1;
        }
        else {
            end--;
            if (start === end - 1) {
                start++;
                end = n - 1;
            }
        }
    }
    return maxDiff;
}

function maxIndexDiff3(arr, n) {
    let lastJ = -1;
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        let diff = 0;
        for (let j = lastJ + 1; j < n; j++) {
            if (arr[j] - arr[i] >= 0) {
                lastJ = j;
            }
        }
        diff = lastJ - i;
        if (diff > maxDiff)
            maxDiff = diff;

        if (lastJ === n - 1)
            break;
    }

    return maxDiff;
}

let arr = [1, 10];
arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
arr = [28, 19, 21, 14, 24, 22, 16, 15, 22, 16, 22, 19, 27, 8, 27];
arr = [28, 19, 21, 14, 24, 22, 16, 15, 22, 16, 22, 19, 27, 8, 27];
console.log(maxIndexDiff(arr, arr.length));
console.log(maxIndexDiff2(arr, arr.length));
console.log(maxIndexDiff3(arr, arr.length));