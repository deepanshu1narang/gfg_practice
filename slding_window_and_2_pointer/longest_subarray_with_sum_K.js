// +ve and -ve
function longestSubarrayWithSumK_brute_force(arr, k) {
    let left = 0;
    let right = 0;

    let sum = 0;
    let len = 0;
    let maxLen = 0;

    while (left < arr.length) {
        while (right < arr.length) {
            sum += arr[right];
            right++;

            if (sum === k) {
                len = right - left;
                maxLen = Math.max(len, maxLen);
            }
        }
        left++;
        right = left;
        sum = 0;
    }
    return maxLen;
}
// +ve and -ve

console.log(longestSubarrayWithSumK_brute_force([94, -33, -13, 40, -82, 94, -33, -13, 40, -82], 52))