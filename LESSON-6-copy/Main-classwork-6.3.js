

// function foo(bar) {
//     console.log(bar);
// }
//
// foo(100)

//
// function foo(bar) {
//     console.log(bar);
// }
//
//
// foo(function () {
//     return 100;
// }());


// function foo(callback) {
//     console.log(callback());//?
// }
//
//
// foo(function () {
//     return 100;
// });

// function calc(a, b, action) {
//     if (action === '+') {
//         return a + b;
//     }else if (action === '-') {
//         return a - b;
//     }
//
// }

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(10, 20, (a, b) => {
    return a + b;
}));

console.log(calc(10, 20, (a, b) => a - b));
console.log(calc(10, 20, (a, b) => a / b));
console.log(calc(10, 20, (a, b) => a / b));
console.log(calc(10, 20, (a, b) => a / b));
console.log(calc(10, 20, (a, b) => a / b));
console.log(calc(10, 20, (a, b) => a / b));