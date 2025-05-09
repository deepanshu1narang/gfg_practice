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

// naive
const isIdealPermutation = function (nums) {
    let globalCount = { val: 0 };
    let localCount = { val: 0 };

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1])
            localCount.val++;
    }

    function merge(nums, low, high) {
        const mid = Math.floor((low + high) / 2);

        let left = low;
        let right = mid + 1;
        let temp = [];

        while (left <= mid && right <= high) {
            if (nums[left] > nums[right]) {
                globalCount.val += mid - left + 1;
                temp.push(nums[right]);
                right++;
            }
            else {
                temp.push(nums[left]);
                left++;
            }
        }
        while (left <= mid) {
            temp.push(nums[left]);
            left++;
        }
        while (right <= high) {
            temp.push(nums[right]);
            right++;
        }
        for (let i = low; i <= high; i++) {
            nums[i] = temp[i - low];
        }
    }

    function inner(nums, low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);
        inner(nums, low, mid);
        inner(nums, mid + 1, high);
        merge(nums, low, high);
    }

    inner(nums, 0, nums.length - 1);
    console.log(globalCount.val, localCount.val);
    return globalCount.val === localCount.val;
};

// good one
// since all the elements in this array are whole numbers from 0 to n - 1 (if length is n).... then for globalInversions to be equal to localInversions absolute difference of element and index must be less than or equal to 1
https://www.youtube.com/watch?v=1QlP6cVLrII
function isIdealPermutation2(nums) {
    for (let i = 0; i < nums; i++) {
        if (Math.abs(nums[i] - 1) > 1)
            return false;
    }
    return true;
}

var smallerNumbersThanCurrent = function (nums) {
    const arr = [...nums];
    const map1 = new Map();

    function merge(nums, low, high) {
        const mid = Math.floor((low + high) / 2);
        // console.log(low, high);

        let left = mid;
        let right = high;
        let temp = [];
        let k = high;

        while (left >= low && right >= mid + 1) {
            if (nums[left] > nums[right]) {
                // console.log("block1");
                let count = map1.get(nums[left]) || 0;
                count += right - mid;
                if (left <= mid && nums[left] !== nums[left + 1])
                    map1.set(nums[left], count);
                temp[k--] = nums[left--];
            }
            else if (nums[left] < nums[right]) {
                let count = map1.get(nums[right]) || 0;
                count += left - low + 1;
                if (right + 1 > high)
                    map1.set(nums[right], count);
                else if (right > mid && nums[right] !== nums[right + 1])
                    map1.set(nums[right], count);

                temp[k--] = nums[right--];
            }
            else if (nums[left] === nums[right]) {
                let count = map1.get(nums[right]) || 0;
                map1.set(nums[right], count);
                temp[k--] = nums[right--];
                temp[k--] = nums[left--];
            }
        }
        while (left >= low) {
            let count = map1.get(nums[left]) || 0;
            map1.set(nums[left], count);
            temp[k--] = nums[left--];
        }
        while (right >= mid + 1) {
            let count = map1.get(nums[right]) || 0;
            map1.set(nums[right], count);
            temp[k--] = nums[right--];
        }
        for (let i = high; i >= low; i--) {
            nums[i] = temp[i];
        }
    }

    function inner(nums, low, high) {
        if (low >= high)
            return;

        const mid = Math.floor((low + high) / 2);
        inner(nums, low, mid);
        inner(nums, mid + 1, high);
        merge(nums, low, high);
    }

    inner(nums, 0, nums.length - 1);

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(map1.get(arr[i]) || 0);
    }
    return res;
};

console.log(smallerNumbersThanCurrent([8, 7, 8, 5, 10, 7, 0]));
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));