

// function calculator() {
//     let a = +prompt('a');
//     let b = +prompt('b');
//     let result = a + b;
//     console.log(result);
// }
// calculator();
// calculator();
// calculator();

function calculator(a,b) {
    let result = a + b;
    return result;
}

let res2 = calculator(88, calculator(44, 11));
console.log(res2);

function sq2() {
    if (arguments.length === 2) {
        return arguments[0] * arguments[1]
    } else if (arguments.length === 3){
        return arguments[0] * arguments[1] * arguments[2]
    }
}

sq2(10, 20, 30);

function asd(a, b, ...numbers) {
    console.log(a, b, numbers);
}
asd(11, 22, 33, 44, 55, 66);