const approach = `
The solution to this algorithm will require 3 pointers to iterate throughout the array, swapping the necessary elements.
Traverse over the array till mid <= high, according to the value of arr[mid] we can have three cases:

(1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
(2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
(3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
(4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
(5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.
`;

function dnfSort(arr) {
    const n = arr.length;

    let low = 0;
    let mid = 0;
    let high = n - 1;

    while (mid <= high) {
        if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
        else if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
    }
}

let arr = [2, 2, 2, 0, 0, 0, 1, 1];
dnfSort(arr);
console.log(arr);