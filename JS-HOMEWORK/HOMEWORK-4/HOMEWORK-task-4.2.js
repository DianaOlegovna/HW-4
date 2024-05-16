

// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// 10- створити функцію яка повертає найменьше число з масиву
// 11- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// 12- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// 13- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


//Task-9

function displayObjects(array) {
    array.forEach(function(obj) {
        const div = document.createElement('div');
        div.innerHTML = `<p>ID: ${obj.id}</p><p>Name: ${obj.name}</p><p>Age: ${obj.age}</p>`;
        document.body.appendChild(div);
    });
}
const objects = [
    { id: 1, name: 'Anna', age: 30 },
    { id: 2, name: 'Serhii', age: 25 },
    { id: 3, name: 'Alina', age: 35 }
];

displayObjects(objects);

//Task-10

function findMinNumber(array) {
    if (array.length === 0) {
        return undefined;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const numbers = [5, 3, 8, 7, 9];
const minNumber = findMinNumber(numbers);
console.log(minNumber);

//Task-11

function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
const arr1 = [1, 2, 10];
console.log(sum(arr1));

//Task-12

function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return arr;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}
const arr = [11, 22, 33, 44];
console.log(swap(arr, 0, 1)); // Виведе [22, 11, 33, 44]


//Task-13

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency)?.value;

    if (exchangeRate === undefined) {
        return "Invalid currency";
    }


    return sumUAH / exchangeRate;
}
const result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(result);
