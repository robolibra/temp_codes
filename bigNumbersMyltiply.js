// big numbers multiply // using reverse scheme

let result = [];
// console.log(result.length);
let mult = 0;
let index = 0;


let num1 = '123456789123456789123456789123456789123456789123456789';
// let str1 = num1.toString().split('').reverse();
let str1 = num1.split('').reverse();
let num2 = '123456789123456789123456789123456789123456789123456789';
// let str2 = num2.toString().split('').reverse();
let str2 = num2.split('').reverse();



for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
        mult = str2[i] * str1[j];
        index = i + j;
        add2Result(mult, index);

        function add2Result(num, pos) {
            let offset = 0;
            let tmp = 0;
            if (num > 9) {
                offset = num - Math.trunc(num / 10) * 10;
                num = Math.trunc(num / 10);
                add2Result(offset, pos);
                add2Result(num, pos + 1);
            } else {
                if (result.length - 1 >= pos) {
                    if (num + result[pos] > 9) {
                        tmp = result[pos];
                        result[pos] = 0;
                        add2Result(num + tmp, pos);
                    } else result[pos] = num + result[pos];
                } else result.push(num);
            }
        }
    }
}

console.log(result.reverse().join(''));