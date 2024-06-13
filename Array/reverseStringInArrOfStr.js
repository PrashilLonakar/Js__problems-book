let arrOfStr = ["my", "name", "is", "Prashil"];
let reversearrOfStr = [];
for (str of arrOfStr) {
  reversearrOfStr.push(str.split("").reverse().join(""));
}

console.log("reversearrOfStr", reversearrOfStr);
