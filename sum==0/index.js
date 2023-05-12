let array = [-8, -9,-4,-6,0,3,2,5,4,9];

let sortedArr = array.sort();
console.log("sortedArr",sortedArr);

let sum0 = [];

function sumIs0(array){
    for(let i =0;i<= array.length-1;i++){
        for(let j =1;j<=i-1;j++){
            if((array[i] + array[j]) == 0){
                sum0.push(array[i]);
                sum0.push(array[j]);
            }
        }
    }
}

sumIs0(array);
console.log("sum0",sum0);
