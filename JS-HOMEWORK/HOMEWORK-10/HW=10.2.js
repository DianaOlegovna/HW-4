

//TASK-1

const dataArray = Array.from({ length: 100 }, (_, index) => ({ id: index + 1 }));

const dataContainer = document.getElementById('data-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let startIndex = 0; // Початковий індекс перших 10 об'єктів

function displayData() {
    const newData = dataArray.slice(startIndex, startIndex + 10);
    dataContainer.innerHTML = newData.map(item => `<div>${item.id}</div>`).join('');
}

function prevPage() {
    if (startIndex > 0) {
        startIndex -= 10;
        displayData();
    }
}

function nextPage() {
    if (startIndex < dataArray.length - 10) {
        startIndex += 10;
        displayData();
    }
}

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

displayData();
