function allDivisors(n) {
    let i = 1;
    let arr = [];
    for (i = 1; i * i <= n; i++) {
        if (n % i === 0)
            arr.push(i);
    }
    for (; i >= 1; i--) {
        if (n % i === 0 && i * i !== n)
            arr.push(n / i);
    }
    return arr;
}
console.log(allDivisors(100));