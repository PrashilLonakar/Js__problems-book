let array = [1, 2, [3, [4], 5], 6];
let total;

let strArr = array.toString();
console.log(strArr);
let problem = strArr.replaceAll(",", "+");
console.log(problem);
total = eval(problem);

console.log(total);
