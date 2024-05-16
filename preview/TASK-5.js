

//Функції в об'єктах та контекст this

let user = {
    name: 'vasya',
    age: 31,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`
    },
    vitanny: (msg) => `${msg} my age is ${user.age}`
}

console.log(user.greeting('hi'));
console.log(user.vitanny('hello'));

