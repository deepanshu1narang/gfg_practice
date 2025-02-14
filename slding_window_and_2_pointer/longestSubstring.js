var lengthOfLongestSubstring = function (s) {
    const n = s.length;

    let hash = {};
    let l = 0;
    let r = 0;
    let len = 0;
    let maxLen = 0;

    while (r < n) {
        if (hash[s[r]] !== undefined) {
            if (l <= hash[s[r]])
                l = hash[s[r]] + 1;
        }
        hash[s[r]] = r;
        len = r - l + 1;
        maxLen = Math.max(len, maxLen);
        r++;
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("cadbzabcd"));