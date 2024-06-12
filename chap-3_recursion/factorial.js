let cache = new Map();
function factorial(n, facts) {
    if (cache.has(n)) {
        return cache.get(n);
    }

    if (n === 0 || n === 1)
        return 1;

    let fact = n * factorial(n - 1);
    cache.set(n, fact);
    return fact;

}

let facts = { 0: 1, 1: 1 }
console.log(factorial(6, facts));
console.log(factorial(5, facts));