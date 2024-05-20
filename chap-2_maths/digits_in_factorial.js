function digitsInFactorial(num) {
    let digits = 0;
    for (let i = 1; i <= num; i++) {
        digits += Math.log10(i);
    }
    return 1 + Math.floor(digits);
}

console.log(digitsInFactorial(5));