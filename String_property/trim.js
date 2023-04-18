let text = "     Hello World!     ";
let result = text.trim();

// trim() removes whitespace from both sides of a string:

//      Hello World!

// Hello World!

console.log(result);

// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log(text2);

// ECMAScript 2019 added the string method trimEnd() to JavaScript.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let text3 = "     Hello World!     ";
let text4 = text3.trimEnd();
console.log(text4);
