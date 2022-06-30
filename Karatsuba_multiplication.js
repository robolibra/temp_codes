let butt = document.querySelector('.but').onclick = () => {
    // code here

    // Karatsuba multiplication with recursion

    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;

    document.querySelector('.out').innerHTML = 'Result = ' + multiply(num1, num2);

    function multiply(x, y) {
        let n = y.toString().length;
        if (n === 1) return x * y;

        let st = 10 ** Math.trunc(n / 2);
        let a = Math.trunc(x / st);
        let b = x % st;
        let c = Math.trunc(y / st);
        let d = y % st;

        // original method
        // let ac = multiply(a, c);
        // let ad = multiply(a, d);
        // let bc = multiply(b, c);
        // let bd = multiply(b, d);

        // return 10 ** n * ac + 10 ** Math.trunc(n / 2) * (ad + bc) + bd;

        // Karatsuba
        let p = a + b;
        let q = c + d;
        let ac = multiply(a, c);
        let bd = multiply(b, d);
        let pq = multiply(p, q);
        let adbc = pq - ac - bd;

        return 10 ** n * ac + 10 ** Math.trunc(n / 2) * adbc + bd;

    }

};