// 6. Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"



//Tried with star =>

let fullArr = [];
function zigzag(string,numrows){
    console.log('string',string.length);
    let arrays = string.split('');
    console.log('arrays',arrays);
    let arr = [];
    // for(let i = 1;i <= 3;i++){
    //     log
    // }
    for(const [j, item] of arrays.entries()){
        if((j+1)%(numrows) == 0){
            arr.push(item)
        };
        fullArr.push(arr);
    }
    console.log("fullArr",fullArr);
}

zigzag("PAYPALISHIRING",3);

