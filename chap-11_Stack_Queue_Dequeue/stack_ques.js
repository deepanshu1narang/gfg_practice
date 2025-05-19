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
// function nextGreaterElement2(nums: number[]): number[]
function nextGreaterElement2(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];

    // bcoz the greater one can occur before the occurrence of the element itself.. so iterating it to 2*n
    for (let i = 0; i < 2 * nums.length; i++) {
        // since we are iterating upto 2 * n so we need to use modulo so that we can stay inside array
        const idx = i % nums.length;
        while (stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]) {
            // peek as in top element of the stack and the one gonna be removed
            const peek = stack.pop();
            // if that is one then only we'll take the chance to update it else it already got its greater element so no ned to bother it 
            if (result[peek] === -1) {
                result[peek] = nums[idx];
            }
        }
        stack.push(idx);
    }
    return result;
}

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

function previousSmallerElement(nums) { }

// smallest-missing-integer-greater-than-sequential-prefix-sum
// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/

function smallestMissingNumber(nums) {
    const numsSet = new Set(nums);
    
    let prefixSum = nums[0];
    let i = 1;
    while(i < nums.length && nums[i] === nums[i - 1] + 1){
        prefixSum += nums[i];
        i++;
    }
    while(numsSet.has(prefixSum)){
        prefixSum++;
    }
    return prefixSum;
};

// console.log(smallestMissingNumber([12, 13, 14, 1, 3, 4, 5]));
// console.log(smallestMissingNumber([3,4,5,1,12,14,13]));
// console.log(smallestMissingNumber([1,2,3,2,5]));
console.log(smallestMissingNumber([14,9,6,9,7,9,10,4,9,9,4,4]));