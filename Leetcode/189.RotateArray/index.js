// 189. Rotate Array

// Medium

// Topics

// Companies

// Hint

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3

// Output: [5,6,7,1,2,3,4]

// Explanation:

// rotate 1 steps to the right: [7,1,2,3,4,5,6]

// rotate 2 steps to the right: [6,7,1,2,3,4,5]

// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2

// Output: [3,99,-1,-100]

// Explanation:

// rotate 1 steps to the right: [99,-1,-100,3]

// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105

// -231 <= nums[i] <= 231 - 1

// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.

// Could you do it in-place with O(1) extra space?

// Accepted 2.4M Submissions 5.9M Acceptance Rate 41.4%

//Example 1 :

// Solution 1:
//Input:
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

for (let i = 0; i <= k; i++) {
    let firstElement = nums.shift();
    nums.push(firstElement);
}

console.log('nums', nums);

// Solution 2:
//Input:

let nums2 = [1, 2, 3, 4, 5, 6, 7];
let index0 = nums2[0];
for (let i = 0; i <= k; i++) {
    index0 = nums2[0];
    for (let j = 0; j <= nums2.length - 1; j++) {
        if (j == nums2.length - 1) {
            nums2[j] = index0;
        } else {
            nums2[j] = nums2[j + 1];
        }
    }
}

console.log('nums2', nums2);

// Solution 3:
//Input:

let nums5 = [1, 2, 3, 4, 5, 6, 7];

for (let j = 0; j <= k; j++) {
    for (let i = 0; i <= nums5.length - 1; i++) {
        if (i == nums5.length - 1) {
            // Move the first element to the end of the array
            let firstElement = nums5.shift();
            nums5.push(firstElement);
        }
    }
}

console.log('nums5', nums5);

// Solution 4:
//Input:
//With using splice and reverse

let nums6 = [1, 2, 3, 4, 5, 6, 7];
var b = nums6.splice(0, k + 1);
b = b.reverse();
nums6 = [...nums6, ...b];
console.log('nums6', nums6);

// Solution 5:
//Input:
//With using splice and reverse

let nums7 = [1, 2, 3, 4, 5, 6, 7];
var rotate = function (nums, k) {
    var b = nums.splice(0, k + 1);
    b = b.reverse();
    let num = [...nums, ...b];
    return num;
};

console.log('rotate array', rotate(nums7, k));

//Example 2:

// Solution 1:
// Input: nums = [-1,-100,3,99], k = 2

// Output: [3,99,-1,-100]

let nums3 = [-1, -100, 3, 99];
let k2 = 2;

for (let i = 1; i <= k2; i++) {
    let firstElement = nums3.shift();
    nums3.push(firstElement);
}

console.log('nums3', nums3);

// Solution 2:
//Input:

let nums4 = [-1, -100, 3, 99];
let index00 = nums4[0];
for (let i = 1; i <= k2; i++) {
    index00 = nums4[0];
    for (let j = 0; j <= nums4.length - 1; j++) {
        if (j == nums4.length - 1) {
            nums4[j] = index00;
        } else {
            nums4[j] = nums4[j + 1];
        }
    }
}

console.log('nums4', nums4);
