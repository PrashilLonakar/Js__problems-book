let array = [1, 2, [3, [4], 5], 6];
let total = 0;

let strArr = array.toString();
let arr2 = strArr.split(",");

function iteration(array) {
  for (let arr of array) {
    total = total + +arr;
  }
  console.log(total);
}

iteration(arr2);

//------------------

//second try

let arr3 = strArr.replaceAll(",", "+");
console.log(arr3);
console.log(eval(arr3));
