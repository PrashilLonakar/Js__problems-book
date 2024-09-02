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

//SolutionType : 1
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

console.log('solution 1: example 1:', isPrefixString(sstring, wordsArr));

//Example 2:

let sstring1 = 'iloveleetcode';
let wordsArr1 = ['apples', 'i', 'love', 'leetcode'];

console.log('solution 1: example 2:', isPrefixString(sstring1, wordsArr1));

//SolutionType: 2 //Best solution till now

var isPrefixString2 = function (s, words) {
    let prefixArr = [];
    prefixArr[0] = words[0];
    for (let i = 1; i <= words.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + words[i];
        if (prefixArr[i - 1] == s) {
            return true;
            break;
        }
    }
    return false;
};

console.log('solution 2: example 1:', isPrefixString2(sstring, wordsArr));

//SolutionType: 3

var isPrefixString3 = function (s, words) {
    let bool = false;
    words.find((item, i, arr) => {
        arr[i] = i == 0 ? item : arr[i - 1] + words[i];
        console.log('word', arr[i]);
        if (arr[i] == s) {
            bool = true;
        }
    });
    console.log('words', words);

    return bool;
};

console.log('solution 3: example 1:', isPrefixString3(sstring, wordsArr));
console.log('solution 3: example 2:', isPrefixString3(sstring1, wordsArr1));

//SolutionType: 4

// var isPrefixString4 = function (s, words) {
//     for (let i = 0; i <= words.length; i++) {
//         words[i] = i == 0 ? words[i] : words[i - 1] + words[i];
//         console.log('word', words[i]);

//         if (words[i] == s) {
//             return true;
//             break;
//         }
//     }
//     console.log(words);
//     return false;
// };

// console.log('solution 4: example 1:', isPrefixString4(sstring, wordsArr));
// console.log('solution 4: example 2:', isPrefixString4(sstring1, wordsArr1));
