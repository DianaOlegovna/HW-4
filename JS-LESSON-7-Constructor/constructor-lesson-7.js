

function userBuilder(id, name) {
    return {id: id, name: name};
}

let user = userBuilder(1, 'asddsa');
console.log(user);

function User(id, name, wife, dogName, dogBreed) {
    this.id = id;
    this.name = name;
    this.wife = wife;
    this.dog = {name: dogName, breed: dogBreed}

    this.greeting = function (msg) {
        return `${msg} my name is ${this.name}`
    };
}

let user1 = new User(1, 'asddsa', {name:'olga'}, 'kokos', 'kokker');
console.log(user1);

console.log(user1 instanceof User);
console.log(user instanceof User);

console.log(user1.greeting('hello'));
user1.work = function () {
    console.log('asdgahgsdhjagsdjhgsadh');
};

user1.work();
console.log(user1);

// date.getTime()

// date.get
