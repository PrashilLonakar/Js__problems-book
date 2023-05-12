// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

let part2 = text.slice(7);
console.log(part2);

let part3 = text.slice(-12);
console.log(part3);

let part4 = text.slice(-12, -6);
console.log(part4);
