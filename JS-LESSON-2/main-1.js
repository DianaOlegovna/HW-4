`use strict`;

let music = [
    ['pink ffloyd', 'acdc'],
    ['2pac', 'eminem', 'coolio', 'llcoolj'],
]

//

let rock = music[0];
console.log(rock);
console.log(rock[0][0]);
console.log(rock[0]);

let user = {
    id:1,
    name : 'asasd',
    skills : [
        {
        title : 'html',
        level : 5
    },
        {
        title:'js',
        levek: 2
    }
    ]
}
let skills = user.skills;
console.log(skills);

//

let obj = {};
let obj2 = obj
console.log({} === {});
console.log(obj2 === obj);

//

let age = 10;
if (age > 18){
    console.log('adult');
}else{
    console.log('cartoon');
}

//

let color = '';
if(color ==='green') {
    console.log('go');
}else if (color === 'yellow') {
    console.log('wait');
}else if (color === 'red') {
    console.log('stop');
}else {
    console.log('????');
}

let condition = false;
if(condition) {
    //
}
if (condition) {
    //
}
if (condition) {
    //
}

//

let x = 'qwe';

switch (x) {
    case 'asd':
        console.log('case1');
    case 'qwe':
        console.log('case2');
        break;
    default:
        console.log('default');
}

//

let ter = 5 > 6 ? 'asd' : 'qwe'