

let user = {
    name: 'vasya',
    age: 123
};

let userCopy = {...user}
console.log(userCopy);
console.log(userCopy === user);
userCopy.age = 0;
console.log(userCopy);
console.log(user);