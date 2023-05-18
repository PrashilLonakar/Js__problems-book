// 5. Longest Palindromic Substring
// Medium

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


// type2: Inside-Out Approach :
//                              So here we are start iterating from middle index of an array, go left and right (index lower i.e left and index right i.e right),
//                              create a string and then check first character of string and last character of string is equal then lowering index then again check and so on.
//                              that's how find a pallindrom with longest length

//                              let say we have odd and even pallindrom
//                              odd : in odd pallindrom every single character except middle one must be same.
//                              even : in even pallindrom every single character must be same.
//                              so we will create two function called getOddPallindrone and getEvenPallindrone.
//                              so getOddPallindrone will use argument as index - 1 (0), index + 1 (2), string
//                              so getEvenPallindrone will use argument as index - 1 (0), index (1), string
//                              to check longest pallindrone what is greater than we will use function currentMax with 2 arguments odd and even i.e currentMax(odd,even)
//                              then we will use another function called totalMax with 2 argument totalMax,currentMax i.e totalMax(totalMax,currentMax)

//Time Complexity : O(n^2) : T
//Space Complexity : O(n) : S

let str1 = "babad";
let str2 = "cbbd";
let str3 = "abaa";

const getAllPallindrom = (left, right, string) => {
    while(left >= 0 && right < string.length) {
        if(string[left] !== string[right]) break;
        left--;
        right++;
    }
    
    return [left + 1,right]
}

let longestPallindrome = function(string){
    let max = [0,1];

    for(let i = 0; i < string.length ; i++){
        let even = getAllPallindrom(i - 1, i, string);
        let odd = getAllPallindrom(i - 1, i + 1, string);
        let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

        max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
    }

    return string.slice(max[0],max[1])
}

console.log(longestPallindrome(str1));
console.log(longestPallindrome(str2));
console.log(longestPallindrome(str3));