{/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-2^31 <= x <= 2^31 - 1
*/}

function reverse1(x) {
    // reverse using while loop

    let reversed = 0;
    while (x !== 0) {
        const digit = x % 10; // Extract the last digit
        x = Math.trunc(x / 10); // Remove the last digit from the number
        // Check if reversing x will cause it to go outside the 32-bit integer range
        if (reversed > Math.pow(2, 31) / 10 || (reversed === Math.pow(2, 31) / 10 && digit > 7)) {
            return 0; // Return 0 if outside the range
        }
        if (reversed < Math.pow(-2, 31) / 10 || (reversed === Math.pow(-2, 31) / 10 && digit < -8)) {
            return 0; // Return 0 if outside the range
        }
        reversed = (reversed * 10) + digit; // Build the reversed number
    }
    return reversed;
}

function reverse2(n) {
    let rev = 0;
    while (n !== 0) {
        rev = rev * 10 + n % 10;
        n = Math.trunc(n / 10);
    }
    if (rev <= -1 * Math.pow(2, 31) || rev >= Math.pow(2, 31) - 1) rev = 0;
    return rev;
};