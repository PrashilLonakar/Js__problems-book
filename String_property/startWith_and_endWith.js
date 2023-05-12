let text = "Hello world";
let end =  text.endsWith("world");
let start =  text.startsWith("world");

// startsWith() returns true if a string starts with a specified string:

// true

// startsWith() is not supported in IE 11 (and earlier versions).

console.log(start);

// endsWith() returns true if a string ends with a specified string, otherwise false.

// Check if "Hello world" ends with "world":

// true

// endsWith() is not supported in IE 11 (or earlier versions).

console.log(end);