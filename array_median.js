let arr = [1, 0, 0, 8, 6];

// array median
let nums = [...arr].sort((a, b) => a - b);
let mid = Math.floor(arr.length / 2);

let sr = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
let steps = 0;
console.log(sr);

for (let i = 0; i < arr.length; i++) {
    steps += Math.abs(arr[i] - sr);
}

console.log(steps);