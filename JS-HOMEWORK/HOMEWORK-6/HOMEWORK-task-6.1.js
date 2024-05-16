

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


                     //TASK-1


// 1. Знайти та вивести довжину наступних стрінгових значень
const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

strings.forEach(str => {
    console.log(`Length of "${str}": ${str.length}`);
});

// 2. Перевести до великого регістру наступні стрінгові значення
const stringsToUpper = ['hello world', 'lorem ipsum', 'javascript is cool'];

const upperCaseStrings = stringsToUpper.map(str => str.toUpperCase());
console.log(upperCaseStrings);

// 3. Перевести до нижнього регістру наступні стрінгові значення
const stringsToLower = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

const lowerCaseStrings = stringsToLower.map(str => str.toLowerCase());
console.log(lowerCaseStrings);

// 4. Почистити "брудну" стрінгу від зайвих пробілів
let dirtyString = ' dirty string   ';
let cleanString = dirtyString.trim();

console.log(`Original: "${dirtyString}"`);
console.log(`Cleaned: "${cleanString}"`);

const stringToarray = (str) => {
    return str.split(' ');
};

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(arr); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// Перетворити всі об'єкти в масиві на стрінгові за допомогою map
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers); // ['10', '8', '-7', '55', '987', '-1011', '0', '1050', '0']

const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        throw new Error("Direction must be either 'ascending' or 'descending'");
    }
};

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending')); // [3, 11, 21];
console.log(sortNums(nums, 'descending')); // [21, 11, 3];

                        //TASK-2

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Сортування за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log('Sorted by monthDuration (descending):', coursesAndDurationArray);

// Фільтрація курсів з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log('Filtered courses (monthDuration > 5):', filteredCourses);

// Перетворення кожного елемента на новий тип {id, title, monthDuration}
let transformedCourses = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log('Transformed courses with id:', transformedCourses);





