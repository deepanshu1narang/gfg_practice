class Solution {
    merge(arr, low, high) {
        const mid = Math.floor((low + high) / 2);
        let left = low;
        let right = mid + 1;

        let temp = [];
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            }
            else {
                temp.push(arr[right]);
                right++;
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
    }

    mergeSort(arr, low, high) {
        if (low >= high) return;
        const mid = Math.floor((low + high) / 2);
        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);
        this.merge(arr, low, high);
    }

    mergeTwoArrays(arr1, arr2, N, M) {
        let left = 0;
        let right = 0;
        let temp = [];

        while (left < N && right < M) {
            if (arr1[left] <= arr2[right]) {
                temp.push(arr1[left]);
                left++;
            }
            else {
                temp.push(arr2[right]);
                right++;
            }
        }

        while (left < N) {
            temp.push(arr1[left]);
            left++;
        }

        while (right < M) {
            temp.push(arr2[right]);
            right++;
        }
        return temp;
    }

    mergeTwoArrays2(arr1, arr2, n, m) {
        let jump = Math.ceil((n + m) / 2); // 5
        while (jump > 0) {
            for (let x = 0; (x + jump) < m + n; x++) {
                let i = x;
                let j = x + jump;
                if (j < n) {
                    if (arr1[i] > arr1[j]) {
                        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
                    }
                }
                else if (i < n && j >= n) {
                    j = j - n;
                    if (arr1[i] > arr2[j]) {
                        let temp = arr1[i];
                        arr1[i] = arr2[j];
                        arr2[j] = temp;
                    }
                }
                else if (i >= n) {
                    i = i - n;
                    j = j - n;
                    if (arr2[i] > arr2[j]) {
                        [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
                    }
                }
            }


            if (jump === 1) {
                jump = 0;
            }
            else {
                jump = Math.floor(jump / 2) + jump % 2;
            }
            // jump = Math.floor(jump / 2) + jump % 2;
        }
        // jump = jump/2 + jump%2;
        console.log("mergeSort2");
        console.log(arr1, arr2);
    }

    mergeTwoArrays3(nums1, m, nums2, n) {
        if (m === 0) {
            for (let i = 0; i < n; i++) {
                nums1[i] = nums2[i];
            }
            return nums1;
        }
        else if (n === 0) return nums1;
        else {
            let i = m - 1;
            let j = n - 1;
            let k = m + n - 1;
            // let temp = Number.MIN_SAFE_INTEGER;
            while (i >= 0 && j >= 0) {
                if (nums1[i] > nums2[j]) {
                    nums1[k--] = nums1[i--];
                }
                else {
                    nums1[k--] = nums2[j--];
                }
            }
            // 
            return nums1;
        }
    };

    mergeTwoSortedArrays(arr1, arr2, m, n) {
        let temp = [];

        let left = 0; ///arr1
        let right = 0; ///arr2
        // let tempIndex = 0;

        const pushLeft = () => {
            temp.push(arr1[left]);
            left++;
        }

        const pushRight = () => {
            temp.push(arr2[right]);
            right++;
        }

        while (left < m && right < n) {
            if (arr1[left] < arr2[right]) {
                pushLeft();
            }
            else {
                pushRight();
            }
        }
        while (left < m) {
            pushLeft();
        }
        while (right < n) {
            pushRight();
        }
        return temp;
    }
}

const sol = new Solution();
let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
sol.mergeSort(arr, 0, arr.length - 1);
sol.mergeTwoArrays2([1, 3, 5, 7, 9], [2, 4, 6, 8], 5, 4);
console.log(arr);
console.log(sol.mergeTwoArrays3([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(sol.mergeTwoArrays3([0], 0, [1], 1));
let a = [10, 15, 20, 40];
let b = [5, 6, 6, 10, 15];

let m = a.length;
let n = b.length;
console.log(sol.mergeTwoSortedArrays(a, b, m, n));