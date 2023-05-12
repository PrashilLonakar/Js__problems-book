// 1. Two Sum
// Easy

// Companies
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


//Solution 1:

let nums = [0,1,2,5,7,9];
let targets = [2,4];

// o/p = 9; 
let sum = 0;

let twoSum = function(nums, targets){
    for(let target of targets){
        sum = sum + nums[target];
    }
    return sum;
}

console.log(twoSum(nums,targets));


//Actual Answer

//Solution 2: 

// Input: nums2 = [2,7,11,15], target2 = 9
// Output: [0,1]

let output = [];
let input = [3,3];
//[3,2,4];
//[2,7,11,15];
let target = 6;
//6;
//9;

let twoSumOutput = function(input, target){
    for(let i = 0;i <= input.length - 1;i++){
        for(let j = i + 1;j <= input.length - 1;j++){
            if((input[i] + input[j]) == target){
                output.push(i,j);
            }
        }
    }
    console.log(output);
}

twoSumOutput(input, target);
