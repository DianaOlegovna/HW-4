console.log({});

let base = {
    id: 1,
    name: 'kokos'
}

let copy = Object.create(base);
copy.surname = 'foobar';

console.log(base);// id -1
console.log(copy);
console.log(copy.id);
console.log(copy.name);
console.log(copy.hasOwnProperty('id'));

let obj = {};
obj.__proto__ = base;
console.log(obj);