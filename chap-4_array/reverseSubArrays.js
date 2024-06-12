// //{ Driver Code Starts
// //Initial Template for javascript
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
//     let t = parseInt(readLine());
//     let i = 0;
//     for (; i < t; i++) {
//         let input_ar0 = readLine().split(' ').map(x => parseInt(x));
//         let N = input_ar0[0];
//         let K = input_ar0[1];
//         let arr = new Array(N);
//         let input_ar1 = readLine().split(' ').map(x => parseInt(x));
//         for (let i = 0; i < N; i++)
//             arr[i] = input_ar1[i];
//         let obj = new Solution();
//         obj.reverseInGroups(arr, N, K);
//         let S = '';
//         for (let i = 0; i < N; i++) {
//             S += arr[i];
//             S += ' ';
//         }
//         console.log(S);
//     }
// }
// // } Driver Code Ends


// //User function Template for javascript

// /**
//  * @param {number[]} arr
//  * @param {number} n
//  * @param {number} k
//  */

class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k) {
        function reverseSubArray(arr, start, k, i, n) {
            let end = start + k - 1;
            if (end > n - 1)
                end = n - 1;

            while (start <= end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
            i++;
            start = k * i;
            if (start < n) {
                arr = reverseSubArray(arr, start, k, i, n);
            }
            return arr;
        }
        return reverseSubArray(arr, 0, k, 0, n);
    }
}

let sol = new Solution();
let arr = [1, 2, 3, 4];

const x = sol.reverseInGroups(arr, arr.length, 3);
console.log(x);