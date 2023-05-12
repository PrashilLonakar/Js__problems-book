// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

let text = "5";
let padded = text.padStart(4, "0");
console.log(padded);

//Pad a string with "x" until it reaches the length 4:

let text2 = "5";
let padded2 = text2.padStart(4, "x");
console.log(padded2);

// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

let numb3 = 5;
let text3 = numb3.toString();
let padded3 = text3.padStart(4, "0");
console.log(padded3);

// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

let text4 = "5";
let padded4 = text4.padEnd(4, "0");
console.log(padded4);

let text5 = "5";
let padded5 = text5.padEnd(4, "x");
console.log(padded5);

// The padEnd() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

let numb6 = 5;
let text6 = numb6.toString();
let padded6 = text6.padEnd(4, "0");
console.log(padded6);
