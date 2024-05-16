

function *foo() {
    yield 100;
    yield 200;
    yield 300;
}

let fooGenerator = foo();

console.log(fooGenerator);
console.log(fooGenerator.next());
console.log(fooGenerator.next());
console.log(fooGenerator.next());
console.log(fooGenerator.next());

function* cardsHolder() {
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'},
    ]
    for (const card of cards){
        yield card;
    }
}

const cardsHolderCenerator = cardsHolder();
const card1 = cardsHolderCenerator.next();
console.log(card1.value);




const card2 = cardsHolderCenerator.next();
console.log(card2.value);



const card3Data  = cardsHolderCenerator.next().value;
console.log(card3Data);