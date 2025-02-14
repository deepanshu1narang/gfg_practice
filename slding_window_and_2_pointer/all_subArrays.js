let arr = [0, 1, 2, 3, 4];

function printSubArrays(arr) {
    const n = arr.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            let res1 = [];
            let str = "";
            for (let k = i; k <= i + j; k++) {
                str += arr[k];
                res1.push(arr[k]);
            }
            console.log(str);
            res.push(res1);
        }
    }
    return res;
}

let subArrays = printSubArrays(arr);
console.log(subArrays);

function maxSubArray(arr, k) {
    const n = arr.length;

    let len = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum <= k) {
                len = Math.max(len, j - i + 1);
            }
            else if (sum > k)
                break;
        }
    }
    return len;
}

let maxLen = maxSubArray(arr, 5);
console.log(maxLen);
arr = [2, 5, 1, 7, 10]
maxLen = maxSubArray(arr, 16);
console.log(maxLen);

function maxSum(arr, k) {
    const n = arr.length;

    let windowSum = 0;
    let maxSum = -Infinity;

    // sum of 1st window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // using sliding window
    for (let i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3))