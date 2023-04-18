//indexOf
// want value to find index

let arr = [1, 2, 3, 4, "prash", "ras", 5, 2, 4, 6, "prash"];

let b = arr.indexOf("ras"); //want value to retuern index
console.log(b);

// let c = arr.findIndex("ras"); //TypeError: ras is not a function
// console.log(c); //

//it opposite

//============================================

//findIndex

// want callback to find index

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 20;
}

console.log("ages.findIndex", ages.findIndex(checkAdult));
console.log("ages.indexOf", ages.indexOf(checkAdult));
