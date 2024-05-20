// naive approach
function power(x, y) {
    let pow = 1;
    for (let i = 0; i < y; i++) {
        pow *= x;
    }
    return pow;
}
console.log(power(4, 3));

// naive approach using recursion
function recPower(x, y) {
    if (y === 0)
        return 1;
    else if (y === 1)
        return x;
    return x * power(x, y - 1);
}

console.log(recPower(6, 3));

function power3(x, y) {
    if (y === 0)
        return 1;
    else if (y === 1)
        return x;
    else {
        let p1 = Math.floor(y / 2);
        let p2 = y - p1;
        return power3(x, p1) * power3(x, p2);
    }
}

console.log(power3(5, 4));
console.log(power3(6, 3));
console.log(power3(6, 4));

function power4(x, y) {
    if (y === 0)
        return 1;
    let temp = power4(x, Math.floor(y / 2));
    temp = temp * temp;
    if (n % 2 === 0)
        return temp;
    else
        return x * temp;
}