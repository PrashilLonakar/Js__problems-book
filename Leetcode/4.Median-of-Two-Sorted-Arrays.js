// 4. Median of Two Sorted Arrays
// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

let nums1 = [1,3];
let nums2 = [2];

let mergedArr1 = ([...nums1,...nums2]).sort();
console.log(mergedArr1);
let avgSum = 0;
let avg = 0;
let median1 = [];

let medianFunc1 = function(array){
    for(let i = 0;i <= array.length - 1; i++){
        if(i !== 0 && i !== array.length - 1){
            median1.push(array[i])
            avgSum = avgSum + array[i];
        }
    }
    avg = avgSum/(median1.length);
    console.log("avg",avg);
}
medianFunc1(mergedArr1);


// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

let nums3 = [1,2];
let nums4 = [3,4];

let mergedArr2 = ([...nums3,...nums4]).sort();
console.log(mergedArr2);
let avgSum2 = 0;
let avg2 = 0;
let median2 = [];

let medianFunc2 = function(array){
    for(let i = 0;i <= array.length - 1; i++){
        if(i !== 0 && i !== array.length - 1){
            median2.push(array[i])
            avgSum2 = avgSum2 + array[i];
        }
    }
    console.log("median2",median2);
    console.log("avgSum2",avgSum2);
    avg2 = avgSum2/(median2.length);
    console.log("avg2",avg2);
}
medianFunc2(mergedArr2);

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106