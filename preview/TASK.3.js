

function  userFactory(id, imya, age, status) {
    let user = {
        id:id,
        name:imya,
        age:age,
        status:status,
    }
    return user;
}

let u1 = userFactory(1, 'kokos', 123, true);
let u2 = userFactory(2, 'abrikos', 234, false);
let u3 = userFactory(3, 'tomat', 345, false);
let u4 = userFactory(4, 'cocumber', 456, true);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);