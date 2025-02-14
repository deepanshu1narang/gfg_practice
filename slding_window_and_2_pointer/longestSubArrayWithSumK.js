function longestSubarrayWithSumK(arr, k) {
    // Write your code here.let len = 0;
    const n = arr.length;

    let len = 0;
    let sum = arr[0];
    // let sum = 0;

    let l = 0;
    let r = 0;

    while (r < n) {
        while (l <= r && sum > k) {
            sum -= arr[l];
            l++;
        }

        if (sum === k) {
            len = Math.max(len, r - l + 1);
        }
        r++;
        if (r < n) sum += arr[r];
    }
    return len;
}

console.log(longestSubarrayWithSumK([1, 2, 1, 3], 2));
console.log(longestSubarrayWithSumK([-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], 15));

let k = 526314
let arr1 = "38289 33170 1859 23863 45658 24408 38353 21761 46411 41237 46956 33613 49349 26026 11031 19190 45358 32843 7054 14184 46050 19610 12625 14179 4066 6866 9996 34864 26222 1262 27512 40674 9793 14583 34325 23768 40373 10787 23397 2298 42342 26340 19552 1612 7014 44006 18885 14427 3821 41595 40575 26085 34594 49448 41457 37147 15003 18172 6585 29405 11315 29488 26525 40889 27485 31122 29281 8787 3008 41470 34402 9184 25736".split(" ").map(e => e - 0);

// console.log(longestSubarrayWithSumK(arr1, k));