class Solution {
    isPrime(n) {
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

    exactly3Divisors(n) {
        // let res = [1];
        let count = 0;
        for (let i = 2; i * i <= n; i++) {
            if (this.isPrime(i)) {
                count++;
            }
        }
        return count;
    }
}