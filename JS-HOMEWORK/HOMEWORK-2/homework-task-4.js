
// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//     тобто ті, які приводиться до false, а це 0 null undefined і тд).

//1

let x;

x = x || "default";

console.log(x); // "default"

x = 0;

x = x || "default";

console.log(x); // "default"

x = "hello";

x = x || "default";

console.log(x); // "hello"
