function partitionProblem(nums, p) {
    console.log(nums[p]);
    const k = nums[p];
    [nums[p], nums[nums.length - 1]] = [nums[nums.length - 1], nums[p]];

    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= k)
            temp.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > k)
            temp.push(nums[i]);
    }

    nums.forEach((e, i) => {
        nums[i] = temp[i];
    });
}

let nums = [5, 13, 6, 9, 12, 8, 11];
partitionProblem(nums, 5);
console.log(nums);

// lomuto partition
function lomutoPartition(arr, l, h) {
    if (!l) l = 0;
    if (!h) h = arr.length - 1;
    let pivot = arr[h];
    let i = l;
    let j = h - 1;
    console.log(arr, "og");

    while (i <= j) {
        if (arr[i] >= pivot && arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
        else if (arr[i] < pivot)
            i++;
        else if (arr[j] >= pivot)
            j--;
        else {
            i++;
            j--;
        }
    }
    [arr[i], arr[h]] = [arr[h], arr[i]];

    console.log(arr, "res");
    return i;
}

console.log("lomuto");
lomutoPartition([10, 80, 30, 90, 70]);
lomutoPartition([10, 16, 8, 12, 15, 6, 3, 9, 5]);
lomutoPartition([10, 16, 8, 12, 15, 6, 3, 9, 5, 13]);

// better and suited for recursive
function lomutoPartition2(arr, l, h) {
    const pivot = arr[h];

    let i = l - 1;
    console.log(arr, "og");
    for (let j = l; j < h; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
    console.log(arr, "res");
    return i + 1;
}

console.log("lomuto2");
lomutoPartition2([10, 80, 30, 90, 70], 0, 4);
lomutoPartition2([10, 16, 8, 12, 15, 6, 3, 9, 5], 0, 8);
lomutoPartition2([10, 16, 8, 12, 15, 6, 3, 9, 5, 13], 0, 9);

// above ine is better
function lomutoPartition3(arr, l, h) {
    const pivot = arr[h];

    let i = l;
    console.log(arr, "og");
    for (let j = l; j < h; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[h]] = [arr[h], arr[i]];
    console.log(arr, "res");
    return i;
}

console.log("lomuto3");
lomutoPartition3([10, 80, 30, 90, 70], 0, 4);
lomutoPartition3([10, 16, 8, 12, 15, 6, 3, 9, 5], 0, 8);
lomutoPartition3([10, 16, 8, 12, 15, 6, 3, 9, 5, 13], 0, 9);

console.log("hoares");
function hoaresPartition(arr, low, high) {
    if (!low) low = 0;
    if (!high) high = arr.length - 1;

    console.log(arr, "og");
    const pivot = arr[low];
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        }
        while (arr[i] < pivot);

        do {
            j--;
        }
        while (arr[j] > pivot);

        if (i >= j) {
            console.log(arr, "res");
            return j;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

hoaresPartition([10, 80, 30, 90, 70], 0, 4);
hoaresPartition([100, 80, 30, 90, 70], 0, 4);
hoaresPartition([10, 10, 10, 10, 10], 0, 4);
hoaresPartition([10, 16, 8, 12, 15, 6, 3, 9, 5], 0, 8);
hoaresPartition([10, 16, 8, 12, 15, 6, 3, 9, 5, 13], 0, 9);