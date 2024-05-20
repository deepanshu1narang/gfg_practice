// count digits
// O(log n) 
function countDigits(num) {
    let digits = 0;
    while (num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }
    return digits;
}

function countDigits2(num) {
    return 1 + Math.floor(Math.log10(num));
}

console.log(countDigits2(2353114));

// notes .....
// write each num as summation of  T(n) from 0 to n - 1
// T(n) = k(n) + 10^(n - 1) .... where k(n) is k of index n and each k is a constant
