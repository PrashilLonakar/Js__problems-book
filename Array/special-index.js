//create a array into prefix array and find the special index in that prefix array if you remove certain index value

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [3, 2, 7, 6, 2];
let array3 = [4, 3, 2, 7, 6, -2];
onSpecialIndex = (arr) => {
    let specialIndexArr = [];
    for (let i = 0; i < arr.length; i++) {
        let indexRemovedArr = [...arr];
        let index = indexRemovedArr.indexOf(indexRemovedArr[i]); //Find the index in the array of the search parameter
        let sumO = 0;
        let sumE = 0;
        indexRemovedArr.splice(index, 1);
        for (let j = 0; j <= indexRemovedArr.length - 1; j++) {
            if (j % 2 == 0) {
                sumE = sumE + indexRemovedArr[j];
            } else {
                sumO = sumO + indexRemovedArr[j];
            }
        }
        if (sumE == sumO && indexRemovedArr[i]) {
            specialIndexArr.push(indexRemovedArr[i]);
        }
    }
    if (!specialIndexArr.length) {
        console.log('This array: ', arr, 'doesnt have special indexes');
    } else {
        console.log('special Indexes in this array: ', arr, ' are', specialIndexArr);
    }
    return specialIndexArr;
};

onSpecialIndex(array);
onSpecialIndex(array2);
onSpecialIndex(array3);

onSpecialIndex2 = (arr) => {
    let specialIndexArr = [];
    let currentEven = 0;
    let currentOdd = 0;
    let totalEven = 0;
    let totalOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentIndex = arr[i];
        if (i % 2 === 0) {
            totalEven += arr[i];
        } else {
            totalOdd += arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentIndex = arr[i];
        if (i % 2 === 0) {
            totalEven -= arr[i];
        } else {
            totalOdd -= arr[i];
        }
        if (i % 2 === 0) {
            currentEven += arr[i];
        } else {
            currentOdd += arr[i];
        }

        if (currentEven + totalOdd === totalEven + currentOdd) {
            specialIndexArr.push(arr[i]);
        }
    }
    console.log('specialIndexArr>>>>', specialIndexArr);
    return specialIndexArr;
};

onSpecialIndex2(array);
onSpecialIndex2(array2);
onSpecialIndex2(array3);
