let arr = [1, 2, 3, 4, 0, 6, 7, 8];
let arr2 = [1, 2, 0, 4, 5, 0, 7, 8];

let notAscendingIndex = [];

function findNonAscendingInArr(arr) {
  let index = 0;
  for (num of arr) {
    if (num !== index + 1) {
      notAscendingIndex.push(index);
    }
    index++;
  }
  console.log("notAscendingIndex", notAscendingIndex);
}

findNonAscendingInArr(arr);
findNonAscendingInArr(arr2);
