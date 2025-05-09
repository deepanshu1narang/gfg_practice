function countSort(nums) {
    if (nums.length === 0) return nums;

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    const range = max - min + 1;

    let countSort = new Array(range).fill(0); // kind of hashtable
    let sortedArray = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        countSort[nums[i] - min]++;
    }


    for (let i = 0; i < countSort.length; i++) {
        countSort[i] += countSort[i - 1];
    }
    // turned into a cumulative sum array

    // now we'll fill this array (basically sortedArray) FROM THE BACK

    for (let i = nums.length - 1; i >= 0; i--) {
        sortedArray[countSort[nums[i] - min]] = nums[i];
        countSort[nums[i] - min]--;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = sortedArray[i];
    }
}

const arr = [2, 3, 1, 2, 5, 1, 2, 5, 2, 5];
