
// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// 2- створити функцію яка обчислює та повертає площу кола з радіусом r
// 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 4- створити функцію яка приймає масив та виводить кожен його елемент
// 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// 7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//           Task-1
function calculator(a, b) {
    return a * b;
}

const a = 5;
const b = 10;
const sr = calculator(a, b);
console.log("P", a, "і", b, "=", sr);

//          Task-2
function calculator1(r) {
    return Math.PI * r ** 2;
}

const radius1 = 5;
const area = calculator1(radius1);
console.log("P", radius1, "=", area);

//Task-3
function calculateCylinderSurfaceArea(r, h) {
    const circleArea = Math.PI * r ** 2;
    const sideArea = 2 * Math.PI * r * h;
    return 2 * circleArea + sideArea;
}

const radius = 3;
const height = 5;
const surfaceArea = calculateCylinderSurfaceArea(radius, height);
console.log("p", radius, "і H", height, "=", surfaceArea);

// Task-4
function asd(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const arr = [1, 2, 3, 4, 5];
asd(arr);

//Task-5
function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}
const text = "sumUAH,currencyValues,exchangeCurrency";
const paragraph = createParagraph(text);
document.body.appendChild(paragraph);

//Task-6
function SameText(text) {
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}
const text1 = "Element";
const ul = SameText(text1);
document.body.appendChild(ul);

//Task-7

function SameText1(text, count) {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}
const text2 = "123";
const count = 3;
const ul1 = SameText1(text2, count);
document.body.appendChild(ul1);

//Task-8

function createListFromArray(array) {
    const ul = document.createElement('ul');
    array.forEach(function(element) {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
    return ul;
}
const array1 = [1, 'two', true, 4.5, 'five'];
const ul2 = createListFromArray(array1);
document.body.appendChild(ul2);

// Task-9


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]       //Task-


function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

const array = [11, 22, 33, 44];
const swappedArray = swap(array, 0, 1);
console.log(swappedArray);