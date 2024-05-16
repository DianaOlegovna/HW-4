

console.log(foobar(10, 20));

function foobar(a, b) {
    return a + b;
}

let user = {
    username: 'kokos',
    email: 'asd@foobar.com',
    greeting: function (msg) {
        console.log('hello my username is - ' + this.username);
        console.log(this);
    }
}
user.greeting('ola');

function objectCreator(id, name) {
    let obj = {id: id, name: name};

    return{
        getid: () => obj.id,
        setId: (newId) =>{},
        getName: () => obj.name,
        setName: (name) => {},
        toString: () => {
            return JSON.stringify(obj);
        }
    }
}

let proxy = objectCreator(1, 'kokos');
console.log(proxy);
proxy.setId(100500);
console.log(proxy.getid());

proxy.setName('abrikos');
console.log(proxy.getName());

console.log(proxy.toString());

let arr = [11, 22, 33, [44, 55], [66, 77, [111, 222]]];

let resultArray = [];

debugger;
function flatter(arr) {
    for (const item of arr) {
        if ( Array.isArray(item)) {
            flatter(item);
        }else {
            resultArray.push(item);
        }
    }
}
flatter(arr);

console.log(resultArray);