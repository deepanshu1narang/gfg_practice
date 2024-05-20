function findMaximum(arr, n) {
    // if1st or last element is the maximum then why to struggle)
    if (n === 1 || arr[0] > arr[1]) {
        return arr[0];
    }
    else if (arr[n - 1] > arr[n - 2]) {
        return arr[n - 1];
    }
    // take a random index .... I took middle
    // if around that arr[mid - 1] < arr[mid] > arr[mid + 1] .... that's it... we found the max element .... 
    // basically till we get this we'll iterate
    // if we don't get it at 1st iteration..... check how it is going
    // if arr[mid - 1] < arr[mid] < arr[mid + 1] ... it must be go forward so mid++
    // else if arr[mid - 1] > arr[mid] > arr[mid + 1] ... means it must go backwards so mid--
    else {
        let low = 1;
        let high = n - 2;
        let mid = Math.floor((low + high) / 2);
        let flag = true;
        // let max = arr[mid];
        while (flag) {
            if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
                flag = false;
            }
            else {
                console.log(arr[mid - 1], arr[mid], arr[mid + 1]);
                if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
                    mid++;
                }
                else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
                    mid--;
                }
            }
        }
        return arr[mid];
    }
}

const array = [1, 15, 25, 45, 42, 21, 17, 12, 11];
console.log(findMaximum(array, array.length));