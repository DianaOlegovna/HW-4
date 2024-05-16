

let arr = [];
console.log(arr);
arr.push('asdfghjl1');
arr.push('asdfghjl2');
arr.push('asdfghjl3');
arr.pop();
arr.push('start1');
arr.push('start2');
arr.push('start3');
arr.shift();
console.log(arr);

let s = arr.join('.');
console.log(s);

// let revese = arr.reverse();
// console.log(revese);
// console.log(arr);

let toReverse = arr.toReversed();
console.log(toReverse);
console.log(arr);

let slice = arr.slice(1, 3);
console.log(slice);
console.log(arr);

console.log(arr);
let splice = arr.splice(1, 2, 'new element');
console.log(arr);

console.log(splice);

function deleteElement(arr, index) {
    arr.splice(index, 1);
    return arr;
}

console.log(deleteElement([11, 22, 33, 44, 55], 2));

function replacer(arr, index, repObj) {
    arr.splice(index, 1, repObj);
    return arr;
}

console.log(replacer([11, 22, 33, 44, 55, 66, 77], 3, '!!!'));

// const callback = function () {
//     console.log('.');
// };
// arr.forEach(callback);

arr.forEach(() => console.log('new'));  //спрощена версія

// console.log(arr);
// arr.forEach((item) => console.log('item'));

const numbers = [123, 345, 4456, 57, -3454, 128, -34];
// numbers.forEach(console.log);
let filteredNumbers = numbers.filter(eachNumFromThisArr => {
    return eachNumFromThisArr > 122;

});

console.log(filteredNumbers);

