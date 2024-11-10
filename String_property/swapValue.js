//using temp
let a = 'abc';
let b = 'xyz';

let temp = a;
a = b;
b = temp;

console.log(a); // Output: "xyz"
console.log(b); // Output: "abc"

//using destructuring
let a2 = 'abc';
let b2 = 'xyz';

[a2, b2] = [b2, a2];

console.log(a2); // Output: "xyz"
console.log(b2); // Output: "abc"

//using additon and subtract
let a3 = 'abc';
let b3 = 'xyz';

a3 = a3 + b3; // a becomes "abcxyz"
b3 = a3.slice(0, a3.length - b3.length); // b becomes "abc"
a3 = a3.slice(b3.length); // a becomes "xyz"

console.log(a3); // Output: "xyz"
console.log(b3); // Output: "abc"
