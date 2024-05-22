

// Через Array.prototype. створити власний foreach, filter, map


//TASK-4
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Cinderella 1', 18, 35),
    new Cinderella('Cinderella 2', 19, 36),
    new Cinderella('Cinderella 3', 20, 37),
    new Cinderella('Cinderella 4', 21, 38),
    new Cinderella('Cinderella 5', 22, 39),
    new Cinderella('Cinderella 6', 23, 40),
    new Cinderella('Cinderella 7', 24, 41),
    new Cinderella('Cinderella 8', 25, 42),
    new Cinderella('Cinderella 9', 26, 43),
    new Cinderella('Cinderella 10', 27, 44)
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Charming', 30, 37);

let foundCinderella = null;

for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        foundCinderella = cinderella;
        break;
    }
}

if (foundCinderella) {
    console.log(`Попелюшка для принца: ${foundCinderella.name}, Вік: ${foundCinderella.age}, Розмір ноги: ${foundCinderella.footSize}`);
} else {
    console.log('Попелюшку не знайдено.');
}

const foundCinderellaWithFind = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);

if (foundCinderellaWithFind) {
    console.log(`Попелюшка для принца за допомогою find: ${foundCinderellaWithFind.name}, Вік: ${foundCinderellaWithFind.age}, Розмір ноги: ${foundCinderellaWithFind.footSize}`);
} else {
    console.log('Попелюшку не знайдено.');
}

//TASK-5

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


const arr = [1, 2, 3];
arr.myForEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const doubledNumbers = numbers.myMap(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
