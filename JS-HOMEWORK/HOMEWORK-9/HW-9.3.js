

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesContainer = document.getElementById('courses-container');

coursesArray.forEach(course => {
    // Створюємо блок для кожного курсу
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = `Title: ${course.title}`;

    const durationDiv = document.createElement('div');
    durationDiv.textContent = `Duration: ${course.monthDuration} months (${course.hourDuration} hours)`;

    const modulesDiv = document.createElement('div');
    modulesDiv.textContent = `Modules:`;
    const modulesList = document.createElement('ul');
    course.modules.forEach(module => {
        const moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    });
    modulesDiv.appendChild(modulesList);
    courseDiv.appendChild(titleDiv);
    courseDiv.appendChild(durationDiv);
    courseDiv.appendChild(modulesDiv);

    coursesContainer.appendChild(courseDiv);
});