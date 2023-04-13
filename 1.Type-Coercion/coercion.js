var str = "5";
var num = 5;
var num2 = 10;

var sum1 = str + num + num2;
var sum2 = num + str + num2;
var sum3 = num + num2 + str;

var sum4 = str + (num + num2);
var sum5 = num + (str + num2);
var sum6 = num + num2 + str;

console.log("sum1", sum1);
console.log("sum2", sum2);
console.log("sum3", sum3);
console.log("sum4", sum4);
console.log("sum5", sum5);
console.log("sum6", sum6);

var sub1 = str - num + num2;
var sub2 = num + str - num2;
var sub3 = num + num2 - str;

var sub4 = str - (num + num2);
var sub5 = num + (str - num2);
var sub6 = num + (num2 - str);

console.log("sub1", sub1);
console.log("sub2", sub2);
console.log("sub3", sub3);
console.log("sub4", sub4);
console.log("sub5", sub5);
console.log("sub6", sub6);
