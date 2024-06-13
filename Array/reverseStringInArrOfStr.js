let arrOfStr = ["my", "name", "is", "Prashil"];
let reversearrOfStr = [];
for (str of arrOfStr) {
  let strArr = str.split("");
  let reverseStrArr = [];
  for (let j = strArr.length - 1; j >= 0; j--) {
    reverseStrArr.push(strArr[j]);
  }
  reversearrOfStr.push(reverseStrArr.join(""));
  // reversearrOfStr.push(str.split("").reverse().join(""));
}

console.log("reversearrOfStr", reversearrOfStr);
