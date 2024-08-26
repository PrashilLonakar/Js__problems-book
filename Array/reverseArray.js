let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reverseArr = [];

//Solution 1:
//Solution with for loop

for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}

console.log('for loop', reverseArr);

//Solution 2:
//Solution with reverse

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.reverse();

console.log('reverse()', arr2);

//Solution 3:
//Solution with reduce()

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3 = arr3.reduce((acc, val) => [val, ...acc], []);

console.log('reduce()', arr3);

//Solution 4:
//Solution with unshift()

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArr4 = [];

for (let i = 0; i <= arr.length - 1; i++) {
    reverseArr4.unshift(arr[i]);
}

console.log('unshift()', reverseArr4);

//Solution 5:
//Solution with map()

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr5 = arr5.map((_, i, arr) => arr[arr.length - 1 - i]);

console.log('map()', arr5);

//Solution 6:
//Solution with Recursion

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(arr) {
    if (arr.length === 0) return [];
    return [arr.pop()].concat(reverseArray(arr));
}

s = reverseArray(arr6);

console.log('Recursion', s);
