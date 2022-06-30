let str = "Was it a cat I saw?";
let strCleared = new RegExp("/^\S[A-z]/g");

let newStr = str.replace(/[^a-zA-Z]+/g, '').toUpperCase();

let flag = true;
for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] != newStr[newStr.length - 1 - i]) {
        flag = false;
        break;
    }
}

console.log(str, flag);