console.log("1423. Maximum Points You Can Obtain from Cards");

const q1 = document.getElementById('q1');
let link1423 = document.createElement('a');
link1423.innerHTML = "que link --- leetcode 1423"
link1423.href = "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/";
link1423.target = "_blank";
q1.appendChild(link1423);

function maxPoints(nums, k) {
    const n = nums.length;

    let lSum = 0;
    let rSum = 0;
    let maxPoints = -Infinity;

    for (let i = 0; i < k; i++) {
        lSum += nums[i];
    }

    maxPoints = lSum;

    let r = n - 1;
    for (let l = k - 1; l >= 0; l--) {
        lSum -= nums[l];
        rSum += nums[r];
        r--;

        maxPoints = Math.max(maxPoints, lSum + rSum);
    }
    return maxPoints;
}



console.log(maxPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));