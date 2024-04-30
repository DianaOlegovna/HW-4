
// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

//1

const coursesAndDurationArray = [
    { courseName: "HTML Basics", duration: 3 },
    { courseName: "JavaScript Fundamentals", duration: 6 },
    { courseName: "React for Beginners", duration: 4 },
    { courseName: "Advanced Node.js", duration: 7 }
];

coursesAndDurationArray.forEach(course => {
    if (course.duration > 5) {
        console.log("Very nice");
    }
});