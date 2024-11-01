// if n =5

// output:
// 0 0 0 0 5 0   0   0   0
// 0 0 0 4 8 12 0   0   0
// 0 0 3 6 9 12 15  0   0
// 0 2 4 6 8 10 12 14  0
// 1 2 3 4 5  6   7    8  9

// for (let i = 1; i < n + 1; i++) {
//     let row = '';
//     let colLength = 10;
//     let printNum = n - i;
//     for (let j = 1; j < colLength + 1; j++) {
//         if (colLength / 2 => n && colLength / 2 =< n) {
//             row += '2 ';
//         } else {
//             row += 0 + ' ';
//         }
//     }
//     console.log(row.trim());
// }

let n = 5;
let colLength = 9;
let middle = Math.round(colLength / 2);
for (let i = 0; i < n; i++) {
    let row = '';
    let num = 1;

    for (let j = 1; j < colLength + 1; j++) {
        if (j >= middle - i && j <= middle + i) {
            row += (n - i) * num + ' ';
            num = num + 1;
        } else {
            row += '0 '; // Simplified concatenation
        }
    }
    console.log(row.trim());
}
