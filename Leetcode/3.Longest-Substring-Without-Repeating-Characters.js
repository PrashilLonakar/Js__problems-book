//3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


//type 1: through loop

let str1 = "abcabcbb"
let otp1 = [];
let filtered = [];
let strLength1 = function(string){
    let array = string.split("");
    for(let i = 0;i <= array.length - 1;i++){
        for(let j = i + 1;j <= array.length - 1;j++){
            if(array[i] === array[j]){
                delete array[j]
            }
        }
    }
    filtered = array.filter(function (el) {
        return el != null;
    });
    otp1 = filtered.toString().replaceAll(',','')
    console.log("otp1",otp1);
} 

strLength1(str1)

//type 2: New Set

let str2 = "abcabcbb"
let otp2 = [];
let strLength2 = function(string){
    let array = string.split("");
    array = new Set(array);
    otp2 = Array.from(array);
    otp2 = otp2.toString().replaceAll(',','');
    console.log("otp2",otp2);
} 

strLength2(str2)

//type 3: filter

let str3 = "abcabcbb"
let otp3 = [];
let strLength3 = function(string){
    let array = string.split("");
    otp3 = array.filter((value, index, array) => array.indexOf(value) === index);
    otp3 = otp3.toString().replaceAll(',','');
    console.log("otp3",otp3);
} 

strLength3(str3)


// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


