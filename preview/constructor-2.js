

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static greeting() {
        console.log(this);
        return `hello my name is ${this.name}`;
    }
}

// let user = new User('va')

console.log(User.greeting());