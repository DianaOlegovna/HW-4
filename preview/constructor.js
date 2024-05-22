

// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User('asd', 123, true);
// let user2 = new User('qwe', 12, false);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// new User('asd', 123, true, {name:'qwerqwe'});

// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name:wifeName, age: wifeAge}
//     this.greeting = function (){
//         console.log('hi');
//     };
// }

// let user = new User('asd', 123, true, 'anna', 28);
// console.log(user);


function User(name, age){
    this.name = name;
    this.age = age;
}

// console.log('sudjsvnlj');
//
// let user = new User('basya', 31);
// user.greeting = function () {
//     console.log('hi!');
// };
// console.log(user);
// user.greeting();
// let user2 = new User('asdjfjn', 123123);
// console.log(user2);
// user2.greeting();


console.log(User);

User.prototype.greeting = function () {
    return `hello my name is ${this.name}`;
};

let user = new User('vasya', 12);
console.log(user.greeting());

console.log(User);

User.prototype.greeting = function () {
    return `hello my name is ${this.name}`;
};

let user1 = new User('vasya', 12);
console.log(user1.greeting());

let user3 = new User('vasya', 31);
user3.greeting = msg => { return `${msg} my name is ${this.name} `;};
let user2 = new User('petya', 123123);
let greeatingCopy = user.greeting.bind(user2);
console.log(greeatingCopy('QQQQ'));




