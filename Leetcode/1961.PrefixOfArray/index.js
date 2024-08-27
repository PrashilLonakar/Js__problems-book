// 1961. Check If String Is a Prefix of Array
// Easy
// Topics
// Companies
// Hint
// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

// Example 1:

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
// Example 2:

// Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// 1 <= s.length <= 1000
// words[i] and s consist of only lowercase English letters.

//Example 1:

let sstring = 'iloveleetcode';
let wordsArr = ['i', 'love', 'leetcode', 'apples'];

var isPrefixString = function (s, words) {
    let prefixArr = [];
    prefixArr[0] = words[0];
    for (let i = 1; i < words.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + words[i];
    }
    let findArr = prefixArr.find((item) => item == s);
    if (findArr) {
        return true;
    }
    return false;
};

console.log(isPrefixString(sstring, wordsArr));

//Example 2:

let sstring1 = 'iloveleetcode';
let wordsArr1 = ['apples', 'i', 'love', 'leetcode'];

console.log(isPrefixString(sstring1, wordsArr1));
