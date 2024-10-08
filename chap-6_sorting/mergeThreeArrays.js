function mergeThree(A, B, C) {
    //your code here
    const a = A.length;
    const b = B.length;
    const c = C.length;
    let temp = [];

    let i = 0, j = 0, k = 0;
    while (i + j + k < a + b + c) {
        // all equals
        if (A[i] === B[j] && B[j] === C[k]) {
            temp.push(A[i]);
            temp.push(B[j]);
            temp.push(C[k]);
            i++;
            j++;
            k++;
        }
        // 2 equals (3 cases i,j j,k or k,i)
        else if (A[i] === B[j]) {
            if (C[k] < A[i]) {
                temp.push(C[k]);
                k++;
            }
            else {
                temp.push(A[i], B[j]);
                i++;
                j++;
            }
        }
        else if (B[j] === C[k]) {
            if (A[i] < C[k]) {
                temp.push(A[i]);
                i++;
            }
            else {
                temp.push(B[j]);
                temp.push(C[k]);
                j++;
                k++;
            }
        }
        else if (C[k] === A[i]) {
            if (B[j] < C[k]) {
                temp.push(B[j]);
                j++;
            }
            else {
                temp.push(A[i]);
                temp.push(C[k]);
                i++;
                k++;
            }
        }
        // all unequals
        else {
            let min = Math.min(A[i], B[j], C[k]);
            temp.push(min);
            if (min === A[i]) {
                i++;
            }
            else if (min === B[j]) {
                j++;
            }
            else {
                k++;
            }
        }

        // end
        if (i === a) {
            A[i] = Number.MAX_SAFE_INTEGER;
        }
        if (j === b) {
            B[j] = Number.MAX_SAFE_INTEGER;
        }
        if (k === c) {
            C[k] === Number.MAX_SAFE_INTEGER;
        }
    }
    return temp;
}

let x = mergeThree([1, 2], [2, 3, 4], [4, 5, 6, 7]);
console.log(x);