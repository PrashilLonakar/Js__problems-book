// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
let part2 = str.substr(7, 6);
console.log(part2);

//If you omit the second parameter, substr() will slice out the rest of the string.
let part3 = str.substr(7);
console.log(part3);

//If the first parameter is negative, the position counts from the end of the string.
let part4 = str.substr(-4);
console.log(part4);
