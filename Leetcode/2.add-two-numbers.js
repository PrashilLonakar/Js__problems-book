
// Problem List
// Premium
// 0

// avatar
// 2. Add Two Numbers
// Medium
// 25.8K
// 5K
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let l1 = [2,4,3];
let l2 = [5,6,4];

let output;

var addTwoNumbers = function(l1, l2) {
    l1 = l1.toString().replaceAll(',','');
    l2 = l2.toString().replaceAll(',','');
    
    output = Number(l1) + Number(l2);
    output = String(output).split('').reverse();
    return output = output.join().replaceAll(',','') 
};

console.log(addTwoNumbers(l1,l2));

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


let l3 = [9,9,9,9,9,9,9];
let l4 = [9,9,9,9];

let output1;

var addTwoNumbers = function(l3, l4) {
    l3 = l3.toString().replaceAll(',','');
    l4 = l4.toString().replaceAll(',','');
    
    output1 = Number(l3) + Number(l4);
    output1 = String(output1).split('').reverse();
    return output1 = output1.join().replaceAll(',','') 
};

console.log(addTwoNumbers(l3,l4));



