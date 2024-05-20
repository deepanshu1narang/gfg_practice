// with while
function trailingZeroes(n) {
    let trZeroes = 0;
    let i = 1;
    while (Math.floor(n / 5 ** i) !== 0) {
        trZeroes += Math.floor(n / 5 ** i);
        i++;
    }
    return trZeroes;
}

// with for
function trailingZeroes2(n) {
    let trZeroes = 0;
    for (let i = 5; n / i > 1; i = i * 5) {
        trZeroes = trZeroes + Math.floor(n / i);
    }
    return trZeroes;
}

console.log(trailingZeroes(135));