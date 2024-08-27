//so what is prefix array
//for ex arr = [1,2,3,4,5] then prefix array will be [1,3,6,10,15]

let words = ['i', 'love', 'leetcode', 'apples'];
let prefixWords = [];
prefixWords[0] = words[0];

for (let i = 1; i < words.length; i++) {
    prefixWords[i] = prefixWords[i - 1] + words[i];
}

console.log(prefixWords);
