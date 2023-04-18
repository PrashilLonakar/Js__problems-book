let text1 = "ab";
let text2 = "cd";
let result = text1.localeCompare(text2);

console.log(result);


// localeCompare() returns one of 3 numbers indicating the sort order.

// -1 if sorted before
// 1 if sorted after
// 0 if equal
// Compare "ab" with "cd":