function isPalindrome(num) {
    if (num < 0 || num % 1 !== 0) {
        num = num.toString();
        return num.split("").reverse().join("");
    }
    else if (num < 10)
        return true;
    else {
        let revNum = 0;
        let temp = num;
        while (temp !== 0) {
            revNum = revNum * 10 + temp % 10;
            temp = Math.floor(temp / 10);
        }
        return revNum === num;
    }
}

console.log(isPalindrome(8698));