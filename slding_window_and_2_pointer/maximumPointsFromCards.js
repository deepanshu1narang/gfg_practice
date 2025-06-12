console.log("1423. Maximum Points You Can Obtain from Cards");

const q1 = document.getElementById('q1');
let link1423 = document.createElement('a');
link1423.innerHTML = "que link --- leetcode 1423"
link1423.href = "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/";
link1423.target = "_blank";
q1.appendChild(link1423);

function maxPoints(cardPoints, k) {
    const n = cardPoints.length;
    let right = n - 1;
    let left = right - k + 1;
    let sum = 0;

    for (let i = left; i <= right; i++) {
        sum += cardPoints[i];
    }
    let maxSum = sum;

    while (left < n) {
        right++;
        sum = sum + cardPoints[right % n] - cardPoints[left % n];
        maxSum = Math.max(maxSum, sum);
        left++;
    }

    return maxSum;
};
console.log(maxPoints([1, 2, 3, 4, 5, 6, 1], 3));

function maxPoints2(cardPoints, k) {
    const n = cardPoints.length;

    let leftSum = 0;
    let rightSum = 0;

    let sum = 0;
    let maxSum = 0;

    let left = 0;
    let right = n - 1;

    for (let i = 0; i < k; i++) {
        leftSum += cardPoints[i];
    }

    left = k - 1;
    sum = leftSum + rightSum;
    maxSum = sum;

    while (left >= 0) {
        leftSum -= cardPoints[left];
        rightSum += cardPoints[right];
        sum = leftSum + rightSum;
        maxSum = Math.max(maxSum, sum);
        left--;
        right--;
    }

    return maxSum;
};



console.log(maxPoints2([100, 40, 17, 9, 73, 75], 3));