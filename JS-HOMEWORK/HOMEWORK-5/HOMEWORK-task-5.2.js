

// #10- створити функцію яка повертає найменьше число з масиву
// #11- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// #12- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #13- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],
//     'USD') // => 250

//TASK-10

const findMin = arr => Math.min(...arr);

const numbers = [5, 3, 8, 1, 10];
console.log(findMin(numbers)); // Виведе: 1


//TASK-11

const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

const numbers1 = [1, 2, 10];
console.log(sum(numbers1)); // Виведе: 13


//TASK-12


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1)); // [22, 11, 33, 44]ж

//TASK-13

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    return sumUAH / exchangeRate;
};

const sumUAH = 10000;
const currencyValues = [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }];
const exchangeCurrency = 'USD';

console.log(exchange(sumUAH, currencyValues, exchangeCurrency));



