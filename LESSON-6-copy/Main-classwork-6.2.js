

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// // users.forEach(function (value) {
// //     console.log(value);
// // });
// //
// // users.forEach(value => console.log(value));
// //
// // let filteredUsers = users.filter(value => value.age > 30);
// // console.log(filteredUsers);
// // console.log(users);
// //
// // let mapedUsers = users.map(function (value, index) {
// //     return {...value, id: index + 1};
// // });
// // console.log(mapedUsers);
// //
// // users.map((value, index) => {
// //     return {id: index + 1, name: value.name, age: value.age, status: value.status}
// // })
// //
// //
// // let find = users.find(value => value.name === 'max');
// // console.log(find);
// //
// // console.log(users.every(value => value.status));
// // console.log(users.some(value => value.status));
//
//
// // let sort = users.sort((u1, u2) => {
// //     return u2.age - u1.age;
// // });
// // console.log(sort);
//
// // console.log(users.sort((a, b) => {
// //     if (a.name < b.name) {
// //         return 1;
// //     }
// //     if (a.name > b.name) {
// //         return -1
// //     }
// //     if (a.name === b.name) {
// //         return 0
// //     }
// // }));
//
//
// console.log(users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []}));
//
// console.log(users);


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

function filter(array, predicateFn) {
    let filterArr = [];
    for (const item of array) {
        if (predicateFn(item)) {
            filterArr.push(item);
        }
    }
    return filterArr;
}

console.log(filter(users, (item) => item.status));
console.log(filter(users, (item) => item.age > 30));


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

console.log(filter(products, (value) => value.price > 15));
