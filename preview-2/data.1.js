

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// let date1 = new Date(1717173327416);
// let date1 = new Date("June 2 2001 22:00");

let date1 = new Date(1987, 0, 30, 12, 30, 50, 0);
console.log(date1);

date1.setDate(31);
console.log(date1);

let user = {
    id:1,
    name: 'kokos',
    bday: new Date(1717173327416)
}
console.log(user);

