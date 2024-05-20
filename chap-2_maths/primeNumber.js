// O(sqrt(n))
function isPrime(n) {
    if (i === 1)
        return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i !== 0)
            return false;
    }
    return true;
}

// O(sqrt(n))
function isPrime2(n) {
    if (i === 1)
        return false;
    for (let i = 2; i * i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

function isPrime2(n) {
    if (n === 1)
        return false;
    else if (n === 2)
        return true;
    else if (n % 2 === 0)
        return false;
    else {
        for (let i = 3; i * i <= n; i = i + 2) {
            if (n % i === 0)
                return false;
        }
        return true;
    }
}

// for n < 25 it is doing no iterations at all
function isPrime3(n) {
    if (n === 1)
        return false;
    else if (n === 2 || n === 3)
        return true;
    else if (n % 2 === 0 || n % 3 === 0)
        return false;
    else {
        for (let i = 5; i * i <= n; i = i + 6) {
            if (n % i === 0 || n % (i + 2) === 0)
                return false;
        }
        return true;
    }
}