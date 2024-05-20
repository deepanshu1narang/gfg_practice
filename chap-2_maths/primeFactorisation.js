function isPrime(n) {
    if (n === 1)
        return false;
    else if (n === 2 || n === 3)
        return true;
    else if (n % 2 === 0 || n % 3 === 0)
        return false;
    else {
        for (let i = 5; i * i <= n; i++) {
            if (n % i === 0 || n % (i + 2) === 0)
                return false;
        }
        return true;
    }
}

function getPrimes(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    return primes;
}

// console.log(getPrimes(100));

// naive approach .... O(n^1.5)
function primeFactorisation(num) {
    let i = 0;
    let primeFactors = [];
    const primes = getPrimes(num); // O(n^1.5)
    const originalNumber = num;
    // O(log n)
    while (num > 1 && primes[i] <= originalNumber) {
        if (num % primes[i] === 0) {
            primeFactors.push(primes[i]);
            num = num / primes[i];
        }
        else {
            i++;
        }
    }
    return primeFactors;
}

console.log(primeFactorisation(12));

// O(n)
function primeFactorisation2(num) {
    let arr = [];
    let increasement = 1;
    let x = 2;
    const ogNum = num;
    if (isPrime(num)) return [num];
    else {
        while (num > 1 && x <= ogNum / 2) {
            if (num % x === 0) {
                arr.push(x);
                num = num / x;
            }
            else {
                if (x % 2 !== 0) increasement = 2;
                x += increasement;
            }
        }
        return arr;
    }
}

console.log(primeFactorisation2(419));

function primeFactorization3(num) {
    let arr = [];
    // i*i bcoz factors come in pairs
    // if d1*d2 === num then d1 < Math.sqrt(num) && d2 > Math.sqrt(num) .... so iterating upto  Math.sqrt(num)
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            arr.push(i);
            num = num / i;
        }
    }
    // if the prime factor is repeating then it is of no use (ex 450 = 2*3*3*5*5) but if last  prime factor is not repeating then that won't come in arr... to get that in arr last condition is imp (ex 28)
    {/*
        i = 2... arr = [2] num = 14
        i = 2... arr = [2, 2] num = 7
        since 3*3 > 7 i can't be 3
        since num > 1 means num is the last primxe factor (for sure it will be prime o/w )
    */}
    if (num > 1) {
        arr.push(num);
    }
    return arr;
}

console.log(primeFactorization3(34));

function primeFactorisation4(num) {
    if (num <= 1) return null;
    let arr = [];
    while (num % 2 === 0) {
        arr.push(2);
        num /= 2;
    }
    while (num % 3 === 0) {
        arr.push(3);
        num /= 3;
    }
    for (let i = 5; i * i <= n; i += 6) {
        while (num % i === 0) {
            arr.push(i);
            num /= i;
        }
        while (num % (i + 2) === 0) {
            arr.push(i + 2);
            num = num / (i + 2);
        }
    }
    if (num > 3)
        arr.push(num);
}