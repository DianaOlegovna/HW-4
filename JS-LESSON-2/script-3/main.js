`use strict`;

let
    user1 = {
    id:1,
    name: 'vasya',
    status: false,
    wife: {
        id:1,
        name: 'olya',
        age: 26,
    }
}
console.log(user1.id);
console.log(user1.name);
console.log(user1.status);
console.log(user1.wife);
console.log(user1.wife.id);

let wifeOfUser1 = user1.wife
console.log(wifeOfUser1);

let user2 = user1;
user2.age = 31;
console.log(user1)
//                                       0   1    2       3    4
let array = [11, 22, 'asd', true, {}];
console.log(array); // typeof object -
// class array
console.log(array[0]);
console.log(array[100]);
console.log(array.length);
array[array.length] = 'new value';
array[array.length] = 'new value';
array[array.length] = 'new value';
array[array.length] = 'new value';
array.push('112312312.3');
console.log(array);

let users = [
    {
        id:1,
        name:'kokos',
        status:true
    },
    {
        id:2,
        name:'abrikos',
        status:false
    },
    {
        id:3,
        name:'tomat',
        status:true
    },
]

// let user1= users[0];
// console.log(user1);
//
// let user2 = users[1];
// console.log(user2[1].id);
// console.log(user2['name']);
//
// let users2 = users;
// users2.push({});
// console.log(users);

