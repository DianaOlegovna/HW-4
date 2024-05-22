

document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        surname: surname,
        age: age
    };


    document.getElementById('output').textContent = JSON.stringify(person, null, 2);
});


//TASK-2
let counter = localStorage.getItem('counter');

if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}

counter++;

document.getElementById('counter').textContent = counter;

localStorage.setItem('counter', counter.toString());

//TASK-3


const sessions = JSON.parse(localStorage.getItem('sessions')) || [];

const sessionsContainer = document.getElementById('sessions-container');

sessions.forEach(session => {
    const sessionElement = document.createElement('div');
    sessionElement.textContent = session;
    sessionsContainer.appendChild(sessionElement);
});