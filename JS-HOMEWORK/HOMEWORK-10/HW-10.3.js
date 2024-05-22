
//TASK-1

const textElement = document.getElementById('text');
const hideButton = document.getElementById('hideBtn');

hideButton.addEventListener('click', function() {

    textElement.style.display = 'none';
});

//TASK-2

const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const messageDiv = document.getElementById('message');

checkAgeBtn.addEventListener('click', function() {
    const age = parseInt(ageInput.value);

    if (age < 18) {
        messageDiv.textContent = 'Вибачте, ви маєте бути старше 18 років.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Вік перевірено успішно!';
        messageDiv.style.color = 'green';
    }
});



