// if n =5

// output:
// 0 0 0 0 * 0 0 0 0
// 0 0 0 * * * 0 0 0
// 0 0 * * * * * 0 0
// 0 * * * * * * * 0
// * * * * * * * * *

let n = 5;
let colLength = 9;
let middle = Math.round(colLength / 2);
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 1; j < colLength + 1; j++) {
        if (j >= middle - i && j <= middle + i) {
            row += '* ';
        } else {
            row += '0 '; // Simplified concatenation
        }
    }
    console.log(row.trim());
}
