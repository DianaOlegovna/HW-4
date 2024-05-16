

let str = 'hello okten !!!';
console.log(str);
// let s = str.concat('!!!');
// console.log(s);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('hel'));
console.log(str.endsWith('en'));
console.log(str.substring(0, 7));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
console.log(str.indexOf('o', 5));
console.log(str.charAt(8));
// console.log(str.replace('e', '!'));
console.log(str.replaceAll('e', '!'));
let split = str.split(' ');
console.log(split);


//TASK-2

let arr = [];
console.log(Array.isArray(arr));
// arr[arr.length] = 100;
console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let join = arr.join(';');
console.log(join);
let nums = [11, 22, 33];

let concat = arr.concat(nums);
console.log(concat);
console.log(arr);
console.log(nums.reverse());

console.log(concat);
let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

let splice = concat.splice(0, 2, '!!!', '#$%^', '*&&^%$65');
console.log(splice);
console.log(concat);
concat.splice(concat.indexOf(11), 1);

console.log(concat.includes(11));
console.log('hello okten'.includes('ok'));

