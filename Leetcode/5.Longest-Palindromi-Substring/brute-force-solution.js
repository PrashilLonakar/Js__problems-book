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


//type 1: brute force : 
//                      so here we will find all substring of given string using getAllSubstring with provided string (let str1 = "babad") as argument, for Example: getAllSubstring(str1).
//                      for ex: let say string is abaa, so its substring is a,ab,aba,abaa,b,ba,baa,a,aa,a

//                      then we will get all pallindrom from that subString Array (allSubstring) using getAllPallindrom with subString array (allSubstring) as argument, for Example: getAllPallindrom(allSubstring).
//                      for ex: let say substringArray = [a,ab,aba,abaa,b,ba,baa,a,aa,a], so pallindrom string from this array is allPallindrom = [aba,aa]

//                      then ones we get all pallindrom we will check longest pallindrom using getLongestPallindrom with ppalindrom array (allPallindrom) as argument, for Example: getLongestPallindrom(allPallindrom).
//                      for ex: we will find longest pallndrom from pallindrom array i.e allPallindrom = [aba,aa] ,which is longestPallindroms = [aba]

//Time Complexity : O(n^3) : T
//Space Complexity : O(n^2) : S

let str1 = "babad";
let str2 = "cbbd";
let str3 = "abaa";

function getAllSubstring(string){
    let allSubstring = [];
    for(let i = 0;i <= string.length - 1; i++){
        for(let j = i + 1;j <= string.length; j++){
            allSubstring.push(string.slice(i,j)); // it will provide all substring of given string
        }
    }
    getAllPallindrom(allSubstring);
}

function getAllPallindrom(array){
    let allPallindrom = [];
    for(let arr of array){
        if(arr === arr.split("").reverse().join("")){
            allPallindrom.push(arr);
        }
    }
    getLongestPallindrom(allPallindrom)
}

function getLongestPallindrom(array){
    let longestPallindroms = [];
    let longest = 1;
    for(let arr of array){
        if(arr.length >= longest && arr.length > 1){
            longest = arr.length;
            longestPallindroms.push(arr);
        }
    }
    console.log("longestPallindrom =>",longestPallindroms);
}

getAllSubstring(str1);
getAllSubstring(str2);
getAllSubstring(str3);
