let array = [2, 1, 4, 5, 3];

const withUsingSortFunc = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log('sortedArr', sortedArr);
};

withUsingSortFunc(array);

const withUsingN2LoopFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log('sortedArr N2', arr);
    return arr;
};

withUsingN2LoopFunc(array);

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

let array2 = [1, -1, 2, 4, 3];
withUsingN1LoopFunc(array);
withUsingN1LoopFunc(array2);
