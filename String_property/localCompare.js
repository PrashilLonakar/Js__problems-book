let text1 = "ab";
let text2 = "cd";
let text3 = "ab";
let result = text1.localeCompare(text2);
let result2 = text1.localeCompare(text3);
let result3 = text2.localeCompare(text1);

console.log(result);
console.log(result2);
console.log(result3);

// localeCompare() returns one of 3 numbers indicating the sort order.

// -1 if sorted before
// 1 if sorted after
// 0 if equal
// Compare "ab" with "cd":
