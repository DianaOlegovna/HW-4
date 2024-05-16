

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
    {name: 'max', age: 31, status: true},
]

// let map = users.map(user => {
//     return user.age;
// });
// console.log(map);

// let map = users.map((user, index) => ({...user, id: index + 1}));
//
// console.log(users);
// console.log(map === users);
// console.log(map);

users.sort((user1, user2) => user1.name.localeCompare(user2.name));
console.log(users);

const callback = function (accumulator, user) {
    if (user.status) {
        accumulator[0].push(user);
    } else {
        accumulator[1].push(user);
    }
    return accumulator;
};
let reduse = users.reduce(callback, [[], []]);
console.log(reduse);

function calculator(a, b, callback){
    return callback(a, b);
}

console.log(calculator(10, 20, (x, y) => x + y));
console.log(calculator(10, 20, (x, y) => x * y));