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

function lengthOfLongestSubstring(s) {
    const map1 = new Map();
    let len = 0;
    let maxLen = 0;

    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {
        if (!map1.has(s[fast])) {
            map1.set(s[fast], fast);
        }
        else {
            let slowest = map1.get(s[fast]) + 1;
            slow = Math.max(slow, slowest);
            map1.set(s[fast], fast);
        }

        len = fast + 1 - slow;
        console.log(slow, fast);
        maxLen = Math.max(len, maxLen);
    }
    return maxLen;
};