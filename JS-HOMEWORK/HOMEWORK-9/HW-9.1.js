

//TASK-1

const block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

block.style.backgroundColor = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '20px';
block.style.padding = '10px';
block.textContent = 'Це початковий блок';

document.body.appendChild(block);

const blockClone = block.cloneNode(true);
blockClone.textContent = 'Це клонований блок';

document.body.appendChild(blockClone);

//TASK-2

const items = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.createElement('ul');

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);

//TASK-3

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    const courseBlock = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = `Title: ${course.title}`;
    courseBlock.appendChild(title);

    const duration = document.createElement('p');
    duration.textContent = `Duration: ${course.monthDuration} months`;
    courseBlock.appendChild(duration);

    document.body.appendChild(courseBlock);
});
