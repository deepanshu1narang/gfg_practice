let arr1 = [3, 1, 2, 4, 1, 5, 2, 6, 4];

function inversionCount(arr) {
    // your code here
    function merge(arr, low, high) {
        const mid = Math.floor((low + high) / 2);

        let left = low;
        let right = mid + 1;

        let temp = [];
        while (left <= mid && right <= high) {
            if (arr[left] > arr[right]) {
                count.val = count.val + mid - left + 1;
                temp.push(arr[right]);
                right++;
            }
            else {
                temp.push(arr[left]);
                left++;
            }
        }
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
        // return count;
    }

    let count = { val: 0 };
    function inner(arr, low, high) {
        if (low >= high) return;
        const mid = Math.floor((low + high) / 2);
        inner(arr, low, mid);
        inner(arr, mid + 1, high);
        merge(arr, low, high);
    }
    inner(arr, 0, arr.length - 1);
    return count.val;
}

console.log(inversionCount([2, 4, 1, 3, 5]));
console.log(inversionCount(arr1));