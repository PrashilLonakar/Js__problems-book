let arr = [1, 2, 3, 4, 5]; //expected o/p : [ 2, 3, 4, 5, 1 ]

// 1] With using new Array
let resultArr = [];

for (let i = 0; i <= arr.length - 1; i++) {
    console.log('arr.length - 1', arr.length - 1);

    if (i == arr.length - 1) {
        resultArr[i] = arr[0];
    } else {
        resultArr[i] = arr[i + 1];
    }
}

console.log(resultArr);

// 2] Without using new Array but using variable

let arr2 = [1, 2, 3, 4, 5]; //expected o/p : [ 2, 3, 4, 5, 1 ]
let index0 = arr2[0];
for (let i = 0; i <= arr2.length - 1; i++) {
    console.log('arr2.length - 1', arr2.length - 1);

    if (i == arr2.length - 1) {
        arr2[i] = index0;
    } else {
        arr2[i] = arr2[i + 1];
    }
}

console.log(arr2);

//3] Without using for loop

let arr3 = [1, 2, 3, 4, 5]; // Expected output: [2, 3, 4, 5, 1]

// Store the first element
let firstElement = arr3.shift();
console.log('firstElement', firstElement);
arr3.push(firstElement);
console.log('arr3', arr3);

//4] With using for loop changing only one line

let arr4 = [1, 2, 3, 4, 5]; // Expected output: [2, 3, 4, 5, 1]

for (let i = 0; i <= arr4.length - 1; i++) {
    if (i == arr4.length - 1) {
        // Move the first element to the end of the array
        let firstElement = arr4.shift();
        arr4.push(firstElement);
    }
}

console.log('arr4', arr4);

//5] With using splice and reverse

let arr5 = [1, 2, 3, 4, 5]; // Expected output: [2, 3, 4, 5, 1]
var b = arr5.splice(0, 1);
b = b.reverse();
arr5 = [...arr5, ...b];
console.log('arr5', arr5);
