//Q.Find the prime no and pair them in a array in a such a way that the difference between adjacent no. will be 2.

let primeArr = [];
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    primeArr.push(i);
  }
}

console.log("primeArr", primeArr);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let adjacentArr = [];
let adjacentStringArr = [];
let adjacentArrArray = [];
function isAdjacent(arr) {
  let index = 0;
  for (number of arr) {
    if (arr[index + 1] - arr[index] == 2) {
      adjacentArr.push(arr[index]);
      adjacentArr.push(arr[index + 1]);
      adjacentStringArr.push(String(arr[index]) + "-" + String(arr[index + 1]));
      let tempraryArr = [];
      tempraryArr.push(arr[index]);
      tempraryArr.push(arr[index + 1]);
      adjacentArrArray.push(tempraryArr);
    }
    index++;
  }
}

isAdjacent(primeArr);

console.log("adjacent Prime Arr", adjacentArr);
console.log("adjacent String Prime Arr", adjacentStringArr);
console.log("adjacent Array Prime Arr", adjacentArrArray);

let callArr = [2, 4, 6];
let callOutStrArrResult = [];
let callOutArrResult = [];
function callOutAdjacentStrArrayByIndex(array) {
  let index = 0;
  for (combination of array) {
    callOutStrArrResult.push(adjacentStringArr[combination]);
    index++;
  }
}

function callOutAdjacentArrayByIndex(array) {
  let index = 0;
  for (combination of array) {
    callOutArrResult.push(adjacentArrArray[combination]);
    index++;
  }
}

callOutAdjacentStrArrayByIndex(callArr);
callOutAdjacentArrayByIndex(callArr);

console.log("callOutArrStrResult", callOutStrArrResult);
console.log("callOutArrResult", callOutArrResult);
