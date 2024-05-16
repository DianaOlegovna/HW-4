

// function tagFn(text = 'Okten', count = 8, taqName = 'h1') {
//     for (let i = 0; i < count; i++) {
//         document.write(`<${taqName}>${text}</${taqName}>`)
//     }
// }
// tagFn('Hello', 5, 'h3');
// createHr('red', 5);
// tagFn('World', 15, 'p');
// createHr('green', 15);
// tagFn('Hello World', 15, 'li');
// createHr();
// tagFn();
//
// function createHr(color = 'orange', num = 1) {
//     document.write(`<hr style="border: ${color} solid ${num}px">`);
// }
// createHr('blue', 2);

let cars = [
    {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000,
        test: 100500, company:{name:'China', value:200}},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
    company:{name:'VAG', value: 1000000} }
];
function iterator(arr) {
    for (const car of arr) {

        for (const carKey in car) {
            if(typeof  car[carKey] === 'object'){
                for (const keyObj in car[carKey]) {
                    document.write(`<li>${keyObj}: ${car[carKey][keyObj]}</li>`)
                }
            }else{
                document.write(`<div>${carKey}:${car[carKey]}</div>`)
            }
        }
        createHr()
        createHr('red',10);
        createHr()
    }

}
iterator(cars);
function createHr(color = 'orange', num = 1) {
    document.write(`<hr style="border: ${color} solid ${num}px">`);}