
                  //TASK-1

let x=0;
x = x + 1;
x += 1;
x++;
++x;
console.log(x);

let a = 0;
let b = a++;
console.log(a);
console.log(b);

                 // TASK-2 ( for of iter )
                //debugger;

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
    {name: 'diana', age: 31, status: false},
    {name: 'serhii', age: 31, status: true},
];

let id = 1;
for (let xxx of users) {
    xxx.id = id;
    id++;
}
console.log(users);

                     //task-3 ( for iter )

for ( let i = 3; i < users.length-2; i++ ) {
    let user = users[i]
    user.id = i+1;
    console.log(i);
}

                    // task-4

let i =0
while (i < users.length) {
    console.log(users[0]);
    i++;
}

                    // task-5

do {
    console.log('ashdghasgfd');
} while (false)

// task-6


let userX = {
    id:111,
    name: 'kokos',
    surname: 'abrikos',
    skills: ['js', 'html'],
}
for (const key in userX) {
    console.log(key,userX[key]);
}

