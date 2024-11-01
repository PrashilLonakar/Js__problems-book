let array = [2, 1, 4, 5, 3];
let array2 = [1, -1, 2, 4, 3];
let k = 2;

const withUsingSortFunc = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log('sortedArr', sortedArr);
    return sortedArr;
};

const withUsingN1LoopFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap the elements
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log('sortedArr N1', arr);
    return arr;
};

console.log('kth largest no. in an array is (sort Func)', withUsingN1LoopFunc(array)[k - 1]);
console.log('kth largest no. in an array is (N1loop Func)', withUsingSortFunc(array)[k - 1]);
