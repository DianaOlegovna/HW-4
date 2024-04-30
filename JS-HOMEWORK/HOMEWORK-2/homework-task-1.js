
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом.Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

//1
let mixedArray = [33, "Hello", true, {a: 1}, [1, 2, 3], null, undefined, 3.14, "world", new Date()];

mixedArray.forEach(element => console.log(element));

//2

let book1 = {
    title: "Robocop",
    pageCount: 180,
    genre: "Novel"
};

let book2 = {
    title: "The Killer",
    pageCount: 281,
    genre: "Fiction"
};

let book3 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian"
};
console.log(book1);
console.log(book2);
console.log(book3);

//3

let bookWithAuthors1 = {
    title: "The Fellowship of the Ring",
    pageCount: 423,
    genre: "Fantasy",
    authors: [
        { name: "J.R.R. Tolkien", age: 81 }
    ]
};

let bookWithAuthors2 = {
    title: "The Shining",
    pageCount: 447,
    genre: "Horror",
    authors: [
        { name: "Stephen King", age: 76 }
    ]
};

let bookWithAuthors3 = {
    title: "Murder on the Orient Express",
    pageCount: 256,
    genre: "Mystery",
    authors: [
        { name: "Agatha Christie", age: 85 }
    ]
};
console.log(bookWithAuthors1);
console.log(bookWithAuthors2);
console.log(bookWithAuthors3);

//4

let users = [
    { name: "Amanda", username: "amanda123", password: "password123" },
    { name: "Anna", username: "anna_xxx", password: "secret456" },
    { name: "Milana", username: "milaniya789", password: "mypassword" },
    { name: "Deymon", username: "deymon99", password: "qwerty123" },
    { name: "Fima", username: "fima2fima", password: "killer_1" },
    { name: "Dina", username: "diana_olegovna", password: "qwe098" },
    { name: "Victoria", username: "gold-GIRL", password: "goldwoman" },
    { name: "Planton", username: "plantosha_69", password: "ghjcnjnf" },
    { name: "Vasya", username: "supertaras", password: "ytdpkfvf'i" },
    { name: "Taras", username: "my_life", password: "oiuytrewq5" }
];
users.forEach(user => console.log(user.password));