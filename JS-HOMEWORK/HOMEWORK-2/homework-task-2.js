
// //  - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням вичключаємо одразу


let weekTemperatures = [
    [15, 16, 14, 15, 17, 16, 15], // ранкові температури
    [22, 23, 21, 22, 24, 23, 22], // денні температури
    [18, 19, 17, 18, 20, 19, 18]  // вечірні температури
];

// Вивід температури для кожного часу доби і кожного дня в консоль
console.log("Morning temperatures:", weekTemperatures[0]);
console.log("Afternoon temperatures:", weekTemperatures[1]);
console.log("Evening temperatures:", weekTemperatures[2]);

for (let i = 0; i < 7; i++) {
    console.log(`Day ${i + 1}: Morning: ${weekTemperatures[0][i]}, Afternoon: ${weekTemperatures[1][i]}, Evening: ${weekTemperatures[2][i]}`);
}