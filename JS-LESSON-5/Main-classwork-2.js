

function* cardDealing() {
    let cards = [
        '6 spade',
        '7 spade',
        '8 spade',

        '6 spade',
        '7 spade',
        '8 spade',

        '6 spade',
        '7 spade',
        '8 spade',

        '6 diamond',
        '7 diamond',
        '8 diamond',
    ]
    for (const card of cards) {
        yield card;
    }
}

let dealer = cardDealing();

console.log(dealer.next());
//...
//...
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());
console.log(dealer.next());