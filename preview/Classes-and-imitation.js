

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static greeting() {
        console.log(this);
        console.log(this.age);
        return `hello my name is ${this.name}`;
    }

}

console.log(User.greeting());

function  User1(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User1.apply(this, arguments);
    this.password = password;
}
let customer = new Customer('vasya', 31, '1111');
console.log(customer);