// basically to find all primes upto given number n;

// naive approach:
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


// using sieve of eratosthenes:
// approach 1.
function sieve(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let res = [];
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = 2 * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    for (i = 2; i <= n; i++) {
        if (isPrime[i])
            res.push(i);
    }
    return res;
}

console.log(sieve(100));

function sieve2(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let res = [];
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // reason: for j from i*2 to i*i all the numbers are already marked as false... why to remark them... that's why starting j from i*i
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if (isPrime[i])
            res.push(i);
    }
    return res;
}

// O(n log(log n))
console.log(sieve2(100));

// shorter code for this
function sieve3(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let res = [];
    // taking i <=n not i*i <=n bcoz... here in this loopo only we'll push all the prime numbers to res
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            res.push(i);
            // reason: for j from i*2 to i*i all the numbers are already marked as false... why to remark them... that's why starting j from i*i
            // when j > n (basically i*i > 20 so it won't work... basically similar thing)
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    // from res we can know if a num is prime or not
    return res;
}

console.log(sieve3(100));




// the question I am obsessed to
{/*
    Description
You are given n closed doors, numbered from 1 to n. A person performs a series of operations n times. During the i-th operation, the person toggles the state (open/close) of all doors whose numbers are multiples of i. Initially, all doors are closed. Your task is to determine how many doors are open at the end of these operations.

Example
Consider n = 100:

On the 1st operation, the person toggles every door (doors 1, 2, 3, ..., 100).
On the 2nd operation, the person toggles every 2nd door (doors 2, 4, 6, ..., 100).
On the 3rd operation, the person toggles every 3rd door (doors 3, 6, 9, ..., 99).
This continues until the 100th operation, where only the 100th door is toggled.
At the end of all operations, you need to determine how many doors are open.

Input
A single integer n representing the number of doors.
Output
A single integer representing the number of doors that are open after all operations.
Constraints
1 ≤ 𝑛 ≤ 10^6
 
Explanation
A door toggles its state (open/close) during each operation corresponding to its divisors. A door will end up open if it is toggled an odd number of times. A door k will be toggled every time k is a multiple of some i. This happens for all divisors of k.

A door will be toggled an odd number of times if and only if it has an odd number of divisors. This happens only when k is a perfect square because divisors generally come in pairs, except when the number is a perfect square (e.g., 
𝑘
=
9
k=9 has divisors 1, 3, 9). 
 */}

//  SOlution: 
// every number has divisors in pairs ---> ideally even numbers ....> so if even numbered door it was closed initially ---> actions will be like ------->  open, close, open, close (even times so same again)
// what if number of divisors are odd --> it'll end up being in the opposite state (open acc to requirement)
// perfrect squares' one divisor repeats which makes it having odd divisors.
// hence all the perfect sqared number doors

function getCountOfOpenDoors(n) {
    return Math.floor(Math.sqrt(n));
}

function getAllOpenDoors(n) {
    let openDoors = [];
    for (let i = 1; i * i <= n; i++) {
        res.push(i * i);
    }
    return res;
}
