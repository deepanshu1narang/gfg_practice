class Solution {
    isLucky(n) {
        // code here
        if (n % 2 === 0)
            return 0;

        let arr1 = Array.from({ length: n }, (_, i) => 2 * i + 1);

        function innerLucky(n, count, arr) {
            // arr = arr.filter(e => e % count !== 0);
            // count++;
            let idx = arr.findIndex(e => e === n) + 1;
            if (idx > 0) {
                if (idx < count) {
                    return 1;
                }
                else if (idx % count === 0) {
                    return 0;
                }
                else {
                    arr = arr.filter((_, i) => (i + 1) % count !== 0);
                    count++;
                    return innerLucky(n, count, arr);
                }
            }
            else {
                return 0;
            }
        }
        return innerLucky(n, 3, arr1);
    }

    isLucky2(n) {
        if (n % 2 === 0)
            return 0;
        n = n - Math.floor(n / 2);
        let count = 3;
        for (; count <= n; count++) {
            if (n % count === 0)
                return 0;
            n = n - Math.floor(n / count);
        }
        return 1;
    }
}

let sol = new Solution();
let x = sol.isLucky(87);
let y = sol.isLucky2(19);
console.log(x, y);