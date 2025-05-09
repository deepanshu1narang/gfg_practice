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
console.log(nge1);

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
console.log(nse1);

// nge 2 --- circular array
// function nextGreaterElement2(nums: number[]): number[]
function nextGreaterElement2(nums) {
    return []
}