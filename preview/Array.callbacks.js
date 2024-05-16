

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value, index, array) {
//     console.log(value);
//     // console.log(array);
// });

// users.forEach(value => console.log(value));
//
// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
// console.log(users);

// let mapeUsers = users.map(function (value, index) {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
// });
// console.log(mapeUsers);

// users.map((value, index) => {
//     return {id: index + 1, name: value.name, age: value.age, status: value.status}
// })

// let find = users.find(value => value.name === 'max');
// console.log(find);

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 0;
//     }
// }));

// users.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
// }, (statT: [], statF: []});

console.log(users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT: [], statF: []}));
console.log(users);