

function calc(a, b) {
    // let result = a + b;
    return a + b;
}

let r1 = calc(10, 20);
let r2 = calc(20, 22);
console.log(r1, r2);

// 1000000 pdv warTax
//function calc(a,b) {
//
// function  tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     return sum - pdv - warTax;
// }
//
// let number = tax(10000);
// console.log(number);

function percentage(sum, per) {
    return sum / 100 * per;
}
function tax(sum) {
    return sum - percentage(sum, 20) - percentage(sum, 1.5);
}

let number = tax(10000);
console.log(number)

//function percentage(sum, per) {

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }

 return filteredUsers;   }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 35, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'diana', age: 31, status: false},
    {name: 'serhii', age: 31, status: true},
];
let filter = userFilter(users);
console.log(filter);