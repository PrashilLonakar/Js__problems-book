let array = [1, 2, [3, [4], 5], 6];
let total = 0;
function flatenArray(array) {
  for (let arr of array) {
    if (typeof arr == "object") {
      console.log(arr);
      flatenArray(arr);
    } else {
      total = total + arr;
    }
  }
}

flatenArray(array);

console.log("total", total);
