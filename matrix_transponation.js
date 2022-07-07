// matrix transponation

let inArr = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0]
];

let result = [];
let temp = [];

for (let i = 0; i < inArr[0].length; i++) {
    for (let j = 0; j < inArr.length; j++) {
        temp.push(inArr[j][i]);
    }
    result.push(temp);
    temp = [];
}

console.log(result);