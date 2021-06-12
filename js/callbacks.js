function mainFunction(callback) {
    let num = +prompt("Введите число");
    let exp = +prompt("Введите стпень");

    callback(num, exp);
}

function exponentiation(a, b) {
    console.log(a, b)
    const result = a ** b;
    alert(result);
}

// mainFunction(function (a, b) {
//     const result = a ** b;
//     alert(result);
// });


const arr = [10, 32, 23];

arr.forEach(exponentiation)