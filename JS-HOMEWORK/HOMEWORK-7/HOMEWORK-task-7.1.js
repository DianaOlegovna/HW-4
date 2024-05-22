

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Sasha', 'dick', 'sashad@example.com', '098 88 33 564'),
    new User(2, 'Taras', 'Maris', 'maris@example.com', ' 066 33 12 496'),
    new User(3, 'Petya', 'Kuzma', 'peku@example.com', '067 33 12 455'),
    new User(4, 'Marina', 'Morin', 'mamorin@example.com', '050 33 99 366'),
    new User(5, 'Vitaliy', 'Romeo', 'romeo@example.com', '068 22 12 777'),
    new User(6, 'Andrey', 'Andro', 'aandrey@example.com', '066 64 21 894'),
    new User(7, 'Toma', 'Tamara', 'toma@example.com', '097 19 72 616'),
    new User(8, 'Denis', 'Deomaz', 'deomaz@example.com', '096 80 55 931'),
    new User(9, 'Victor', 'Omarius', 'omarius@example.com', '067 15 59 321'),
    new User(10, 'Olya', 'Sidorov', 'olya@example.com', '066 60 00 654')
];

console.log(users);

const evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);


const sortedUsers = users.slice().sort((a, b) => a.id - b.id);
console.log(sortedUsers);


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [

    new Client(1, 'Sasha', 'dick', 'sashad@example.com', '098 88 33 564', ['item', 'item2']),
    new Client(2, 'Taras', 'Maris', 'maris@example.com', ' 066 33 12 496', ['item1']),
    new Client(3, 'Petya', 'Kuzma', 'peku@example.com', '067 33 12 455', ['item1', 'item2', 'item3']),
    new Client(4, 'Marina', 'Morin', 'mamorin@example.com', '050 33 99 366', ['item1', 'item2']),
    new Client(5, 'Vitaliy', 'Romeo', 'romeo@example.com', '068 22 12 777', ['item1']),
    new Client(6, 'Andrey', 'Andro', 'aandrey@example.com', '066 64 21 894', ['item1', 'item2', 'item3', 'item4']),
    new Client(7, 'Toma', 'Tamara', 'toma@example.com', '097 19 72 616', ['item1']),
    new Client(8, 'Denis', 'Deomaz', 'deomaz@example.com', '096 80 55 931', ['item1', 'item2']),
    new Client(9, 'Victor', 'Omarius', 'omarius@example.com', '067 15 59 321', ['item1', 'item2', 'item3']),
    new Client(10, 'Olya', 'Sidorov', 'olya@example.com', '066 60 00 654', ['item1'])
];

console.log(clients);


const sortedClients = clients.slice().sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

//TASK-2

// Функція конструктор для об'єктів car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    // Метод drive, який виводить повідомлення про швидкість
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    // Метод info, який виводить всю інформацію про автомобіль
    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
        if (this.driver) {
            console.log(`Водій: ${JSON.stringify(this.driver)}`);
        }
    };

    // Метод increaseMaxSpeed, який підвищує максимальну швидкість
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    // Метод changeYear, який змінює рік випуску
    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    // Метод addDriver, який додає водія до об'єкта car
    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

// Приклад створення об'єкта car
const myCar = new Car('Model S', 'Tesla', 2020, 250, 100);

// Використання методів
myCar.drive(); // їдемо зі швидкістю 250 на годину
myCar.info();


myCar.increaseMaxSpeed(50);
myCar.drive(); // їдемо зі швидкістю 300 на годину

myCar.changeYear(2022);
myCar.info();


myCar.addDriver({ name: 'John Doe', age: 30 });
myCar.info();






