

const rowCountInput = document.getElementById('rowCountInput');
const columnCountInput = document.getElementById('columnCountInput');
const cellContentInput = document.getElementById('cellContentInput');
const generateTableBtn = document.getElementById('generateTableBtn');
const tableContainer = document.getElementById('tableContainer');

generateTableBtn.addEventListener('click', function() {
    const rowCount = parseInt(rowCountInput.value);
    const columnCount = parseInt(columnCountInput.value);
    const cellContent = cellContentInput.value;

    const table = document.createElement('table');

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columnCount; j++) {
            const cell = document.createElement('td');
            cell.textContent = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.innerHTML = '';

    tableContainer.appendChild(table);
});

//TASK-2

const priceBlock = document.getElementById('priceBlock');

const previousVisitTimestamp = localStorage.getItem('previousVisitTimestamp');

const currentTimestamp = new Date().getTime();

if (previousVisitTimestamp && (currentTimestamp - previousVisitTimestamp < 10000)) {
    priceBlock.textContent = "Ціна: 100 грн";
} else {
    const currentPrice = parseInt(priceBlock.textContent);
    const newPrice = currentPrice + 10;
    priceBlock.textContent = `Ціна: ${newPrice} грн`;

    localStorage.setItem('previousVisitTimestamp', currentTimestamp);
}