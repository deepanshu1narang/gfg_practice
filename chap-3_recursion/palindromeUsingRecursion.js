function isPalindromeRec(word, s, e) {
    if (word[s] !== word[e]) return false;
    if (s <= e) {
        s++;
        e--;
        isPalindromeRec(word, s, e);
    }
    return true;
}

let word = "malayalam";
word = "max";
console.log(isPalindromeRec(word, 0, word.length - 1));