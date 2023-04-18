//Normal problem

let x = 10;
let y = 20;
let result = x * y;

console.log(result); //200

let result2 = "x*y";
console.log(result2); //x*y

// so to resolve this we can eval in Js.

let result3 = eval("x*y");
console.log(result3); //200
