
// // - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

//1

function checkNonZero(x) {
    if (x !== 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkNonZero(1); // true
checkNonZero(0); // false
checkNonZero(-3); // true

//2

function checkQuarter(time) {
    if (time >= 0 && time < 15) {
        console.log('The first quarter');
    } else if (time >= 15 && time < 30) {
        console.log('Second quarter');
    } else if (time >= 30 && time < 45) {
        console.log('The third quarter');
    } else if (time >= 45 && time < 60) {
        console.log('Fourth quarter');
    } else {
        console.log('Wrong time');
    }
}

checkQuarter(10); // The first quarter
checkQuarter(25); // Second quarter
checkQuarter(40); // The third quarter
checkQuarter(55); // Fourth quarter

//3

function checkDecade(day) {
    if (day >= 1 && day <= 10) {
        console.log('The first decade');
    } else if (day >= 11 && day <= 20) {
        console.log('The second decade');
    } else if (day >= 21 && day <= 31) {
        console.log('The third decade');
    } else {
        console.log('Wrong day');
    }
}

checkDecade(5);  // The first decade
checkDecade(15); // The second decade
checkDecade(25); // The third decade

//4

function getDaySchedule(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday - Work");
            break;
        case 2:
            console.log("Tuesday - Gym");
            break;
        case 3:
            console.log("Wednesday - Meeting");
            break;
        case 4:
            console.log("Thursday - Yoga");
            break;
        case 5:
            console.log("Friday - Party");
            break;
        case 6:
            console.log("Saturday - Family time");
            break;
        case 7:
            console.log("Sunday - Rest");
            break;
        default:
            console.log("Invalid day number");
    }
}

getDaySchedule(1); // Monday - Work
getDaySchedule(5); // Friday - Party
getDaySchedule(7); // Sunday - Rest
getDaySchedule(8); // Невірний number day

//5

function findMax(a, b) {
    if (a > b) {
        console.log(`Maximum number: ${a}`);
    } else if (b > a) {
        console.log(`Maximum number: ${b}`);
    } else {
        console.log(`The numbers are equal: ${a} і ${b}`);
    }
}

findMax(10, 20); // Maximum number: 20
findMax(30, 15); // Maximum number: 30
findMax(25, 25); // The numbers are equal: 25 і 25