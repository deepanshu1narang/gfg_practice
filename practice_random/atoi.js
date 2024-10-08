var myAtoiRecursive = function (s) {
    s = s.trim();
    if (s.length === 0) return 0;
    let start = 0;
    let sign = 1;
    let num = 0;
    if (s[0] === "+" || s[0] === "-") {
        start = 1;
        sign = s[0] === "-" ? -1 : 1;
    }

    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;

    function innerAtoi(s, idx, num) {
        if (idx >= s.length) return num;

        let x1 = s[idx] - 0;
        if (x1 >= 0) {
            if (s[idx] === " ") return num;
            num = num * 10 + x1;
            idx++;
            return innerAtoi(s, idx, num);
        }
        else {
            return num;
        }
    }

    let result = sign * innerAtoi(s, start, num);

    if (result >= max)
        result = max;
    else if (result <= min)
        result = min;

    return result;
};

console.log(myAtoiRecursive("-91283472332"));

var myAtoiIterative = function (s) {
    s = s.trim();

    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;

    let start = 0;
    let isNegative = false;
    let result = 0;
    if (s[0] === "-" || s[0] === "+") {
        isNegative = s[0] === "-" && true;
        start++;
    }

    for (let i = start; i < s.length; i++) {
        if (s[i] - 0 >= 0) {
            if (s[i] === " ") break;
            result *= 10;
            result += (s[i] * 1);
        }
        else {
            break;
        }
    }
    result = isNegative ? -1 * result : 1 * result;

    if (result >= max)
        result = max;
    else if (result <= min)
        result = min;

    return result;
};

console.log(myAtoiIterative("-91283472332"));