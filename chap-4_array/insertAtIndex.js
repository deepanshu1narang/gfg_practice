class Solution {
    insertAtIndex(arr, sizeOfArray, index, element) {
        for (let i = sizeOfArray; i >= index; i--) {
            arr[i] = arr[i - 1];
            if (i === index) {
                arr[i] = element;
            }
        }
        return arr;
    }
}

let sol = new Solution();
let arr = [1, 2, 3, 4, 5];
const size = arr.length;

const x = sol.insertAtIndex(arr, size, 2, 90);
console.log(x);