let array = [1, 2, [3, [4], 5], 6];
let total = 0;

let strArr = array.toString();
console.log('strArr', strArr);
let arr2 = strArr.split(',');
console.log('arr2', arr2);

function iteration(array) {
    for (let arr of array) {
        total = total + +arr;
    }
    console.log(total);
}

iteration(arr2);

//------------------

//second try

let arr3 = strArr.replaceAll(',', '+');
console.log(arr3);
console.log(eval(arr3));

//-------------------

// By using recurtion

let array2 = [1, 2, [3, [4], 5], 6];
let total2 = 0;
function iteration2(array2) {
    for (let arr of array2) {
        if (typeof arr == 'object') {
            iteration2(arr);
        } else {
            total2 = total2 + arr;
        }
    }
}

iteration2(array2);
console.log('total2 =>', total2);
