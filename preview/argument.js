

// function foobar(){
//     console.log(arguments);
// }
//
// foobar(1, 2, 3);


function  foobar () {
    console.log(arguments);
    if (arguments.length === 2) {
        return arguments[0] * arguments[1];
    }else if (arguments.length === 3) {
        return arguments[0] * arguments[1] + arguments[2];
    }
}
console.log(foobar(10, 20));
console.log(foobar(10, 20, 30));