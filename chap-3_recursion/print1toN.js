class Solution {
    printNos(N) {
        if (N === 0) {
            return;
        }
        this.printNos(N - 1);
        // process.stdout.write(N + " ");
        console.log(N);
    }
}

let sol = new Solution();
sol.printNos(64);