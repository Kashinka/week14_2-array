let grades = []; // создаем пустой массив для оценок

grades[0] = Math.floor(Math.random() * 101);
grades[1] = Math.floor(Math.random() * 101);
grades[2] = Math.floor(Math.random() * 101);
grades[3] = Math.floor(Math.random() * 101);
grades[4] = Math.floor(Math.random() * 101);
grades[5] = Math.floor(Math.random() * 101);
grades[6] = Math.floor(Math.random() * 101);
grades[7] = Math.floor(Math.random() * 101);
grades[8] = Math.floor(Math.random() * 101);
grades[9] = Math.floor(Math.random() * 101);
grades[10] = Math.floor(Math.random() * 101);
grades[11] = Math.floor(Math.random() * 101); // заполняем массив баллами студентов от 1 до 100 с помощью рандомайзера
console.log(grades);
const sum = grades.reduce((a, b) => a + b, 0); // считаем сумму баллов студентов
const average = (sum / grades.length) || 0; // считаем средний балл студентов
console.log(average);