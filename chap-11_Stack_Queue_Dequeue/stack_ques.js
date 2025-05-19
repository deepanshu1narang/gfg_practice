// Next Greater Element - 1
// https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1

// fun (x: number[]): number[]
function nextGreaterEelment1(nums) {
    let numsMap = new Map();
    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            numsMap.set(stack.pop(), nums[i]);
        }
        stack.push(i);
    }

    let result = new Array(nums.length).fill(-1);

    numsMap.forEach((value, key) => {
        result[key] = value;
    })

    return result;
}

let nums = [6, 8, 0, 1, 3];
nums = [1, 3, 2, 4];
nums = [41, 88, 58, 69, 93, 42, 44, 25, 12, 47, 41, 88, 58, 69, 93, 42, 44, 25, 12, 47];
let nge1 = nextGreaterEelment1(nums);
// console.log(nge1);

function nextGreaterEelment1WithoutSpace(nums) {
    let result = new Array(nums.length).fill(-1);
    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
}

// next greater element 1 -with 2 arrays 
// https://leetcode.com/problems/next-greater-element-i/

// function nextGreaterElementWithTwoArrays(nums1: number[], nums2: number[]): number[] 
function nextGreaterElementWithTwoArrays(nums1, nums2) {
    let numsMap = new Map();
    let stack = [];

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            numsMap.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = numsMap.get(nums1[i]) || -1;
    }
    return nums1;
}

// next smaller element

// function nextSmallerElement(nums: number[]): number[]
function nextSmallerElement(nums) {
    let result = new Array(nums.length).fill(-1);
    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
}

nums = [4, 8, 2, 1, 6, 10, 5];
let nse1 = nextSmallerElement(nums);
// console.log(nse1);

// nge 2 --- circular array
// function nextGreaterElement2(nums: number[]): number[]
function nextGreaterElement2(nums) {
    return []
}

// fn(n: number): number
function nextGreaterElements3(n) {
    const numsCharArray = n.toString().split("").map(e => e - 0);
    let nextGreaterElem = -1;
    let x = -1;
    let y = - 1;
    // x and y being the indexes whihc we need in order to get any number greater than this given number n
    for (let i = numsCharArray.length - 2; i >= 0; i--) {
        // left < right
        if (numsCharArray[i] < numsCharArray[i + 1]) {
            // here we know that we need to swap i-th index with something else
            /// or we need to update number at index i with a anumber just higher than numsCharArray[i]
            x = i;
            break;
        }
    }
    // basically no x is caught means number is biggest with these combinations
    if (x === -1) {
        return -1;
    }
    // fow finding the number greater than arr[x]
    for (let i = numsCharArray.length - 1; i > x; i--) {
        if (numsCharArray[i] > numsCharArray[x]) {
            if (y === -1) y = i;
            else if (numsCharArray[i] < numsCharArray[y]) {
                y = i;
            }
        }
    }
    [numsCharArray[x], numsCharArray[y]] = [numsCharArray[y], numsCharArray[x]];
    let partiallySortedArr = numsCharArray.slice(0, x + 1).concat(numsCharArray.slice(x + 1).sort((a, b) => a - b));
    nextGreaterElem = partiallySortedArr.join("") - 0;
    if (nextGreaterElem >= Math.pow(2, 31) - 1)
        return -1;
    return nextGreaterElem;
};

// console.log(nextGreaterElements3(230241));

function previousSmallerElement(arr) {
    const n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return result;
}

function asteroidCollision(asteroids) {
    const n = asteroids.length;
    let stack = [];

    for (let i = 0; i < n; i++) {
        let flag = true;
        while (flag && stack.length > 0 && isCollisionPossible(stack[stack.length - 1], asteroids[i])) {
            if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
                stack.pop();
            }
            else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
                stack.pop();
                flag = false;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            stack.push(asteroids[i]);
        }
    }

    function isCollisionPossible(inStack, newAsteroid) {
        return inStack > 0 && newAsteroid < 0;
    }

    return stack;
};

// let ar1 = [5, 10, -5];
// console.log(asteroidCollision(ar1));
// ar1 = [8, -8];
// console.log(asteroidCollision(ar1));
// ar1 = [10, 2, -5];
// console.log(asteroidCollision(ar1));

// wrong
function countCollisions(directions) {

    function willCollide(inStack, current) {
        if ((inStack === "S" && current === "L") || (inStack === "R" && current === "S"))
            return 1;
        else if (inStack === "R" && current === "L")
            return 2
    }

    let arr = directions.split("");
    let collisions = 0;
    // stack.push(arr[i]);
    for (let i = 1; i < arr.length; i++) {
        const points = willCollide(arr[i - 1], arr[i]);
        if (points) {
            collisions += points;
            arr[i - 1] = "S";
            arr[i] = "S";
        }
    }

    return collisions;
};

console.log(countCollisions("SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR"));
// wrong