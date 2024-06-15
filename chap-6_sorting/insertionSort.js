function insersionSort(arr, n) {
    // arr[0] -  already sorted
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        // ///////// if confused use void thing for understanding
        // arr[i] = "void";
        // taking the element which was just before this
        let j = i - 1;
        // starting iteration from the just preceeding element and going till 0th index element
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            // arr[j] = "void";
            j--;
        }
        // filing the empty space ... and in case temp >= arr[j] (ie arr[i] > arr[i-1] ... arr[j+1] that is nothing but arr[i] ... basically it'll fill itself)
        arr[j + 1] = temp;
    }
}

let arr = [4, 1, 23, 65, 86, 35, 96, 34];
insersionSort(arr, arr.length);
console.log(arr);
// nothing