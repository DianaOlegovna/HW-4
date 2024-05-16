

// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// #1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// #2- створити функцію яка обчислює та повертає площу кола з радіусом r
// #3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// #4- створити функцію яка приймає масив та виводить кожен його елемент
// #5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// #6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// #7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// #8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// #9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Д' +
// 'ля кожного об'єкту окремий блок.



//TASK-1
const calculator = (a, b) => a * b;

const area = calculator(5, 10);
console.log(area);

//TASK-2

const calculateCircle = r => Math.PI * r * r;

const area1 = calculateCircle(5);
console.log(area1);

//TASK-3

const calculateCylinderSurfaceArea = (r, h) => 2 * Math.PI * r * (r + h);

const surfaceArea = calculateCylinderSurfaceArea(5, 10);
console.log(surfaceArea);

//TASK-4

const print = arr => arr.forEach(element => console.log(element));
const myArray = [1, 2, 3, 4, 5];
print(myArray);

//TASK-5

const createParagraph = text => {
    const p = document.createElement('p');
    p.textContent = text;
    document.body.appendChild(p);
};
createParagraph('text #1');

//TASK-6

const SameText = text => {
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
SameText('Element ul and il');

//TASK-7

const SameText1 = (text, count) => {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

SameText1('Element il and ul', 5);

// TASK-8

const createListFromArray = arr => {
    const ul = document.createElement('ul');
    arr.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
const myArray1 = [1, 'two', true, 4.5];
createListFromArray(myArray1);


//TASK-9

const displayObjects = objects => {
    objects.forEach(object => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>ID: ${object.id}</p>
            <p>Name: ${object.name}</p>
            <p>Age: ${object.age}</p>
        `;
        document.body.appendChild(div);
    });
};
const myObjects = [
    { id: 1, name: 'Natali', age: 25 },
    { id: 2, name: 'Alla', age: 30 },
    { id: 3, name: 'Oleg', age: 35 }
];

displayObjects(myObjects);
