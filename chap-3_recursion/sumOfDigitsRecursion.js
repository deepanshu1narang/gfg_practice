function sumOfDigits(n) {
    if (n < 10)
        return n;
    return n % 10 + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(12945));

function digitalRoot(n) {
    if (n < 10)
        return n;
    let x = n % 10 + sumOfDigits(Math.floor(n / 10));
    if (x >= 10)
        return digitalRoot(x);
    else
        return x;

}

console.log(digitalRoot(9999));