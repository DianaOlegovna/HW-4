

let x = 0;
x = x + 1; // x = 1
console.log(x);
x++;
console.log(x); //2

x += 1;
console.log(x); //3

x = x - 1; //2
console.log(x);
x *=1; //1
console.log(x);
x--;
console.log(x);//0

let a = 0;
let b = ++a;
console.log(a,b);            // b буде дорівнювати a через++

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

for (let user of users) {
    console.log(user);
}

// for (let i = 0; i < users.length; i++) {    // itar відкриває останній масив до якого було звернення
//     let user = users[i];
//     document.write(``)
// }


