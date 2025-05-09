function nextLargerElement(arr) {
    // code here
    let map1 = new Map();
    let stack = [];
    // let res = [];

    for (let i = 0; i < arr.length * 2; i++) {
        let idx = i % arr.length;
        while (stack.length > 0 && stack[stack.length - 1] < arr[idx]) {
            // map1.set(stack.pop(), arr[idx]);
            let peek = stack.pop();
            let arrX = map1.has(peek) ? map1.get(peek) : [];
            arrX.push(arr[idx]);
            map1.set(peek, arrX)
        }

        stack.push(arr[idx]);
    }
    console.log(map1);

    let res = [];
    for (let i = 0; i < arr.length; i++) {

        let el = -1;
        if (map1.has(arr[i])) {
            let mapArr = [...map1.get(arr[i])];
            el = mapArr.pop();
            map1.set(arr[i], new Set(mapArr));
        }

        // arr[i] = map1.has(arr[i]) ? map1.get(arr[i]) : -1;
        res[i] = el;
    }
    return res;
}

// 8 1 9 8 4 5 9 2 8
console.log(nextLargerElement([8, 1, 9, 8, 4, 5, 9, 2, 8]));