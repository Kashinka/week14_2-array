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
console.log(average); // выводим средний балл в консоль

const maximum = Math.max( ...grades ); // вычисляем максимальный балл среди оценок студентов

console.log(maximum); // выводим максимальный балл

const minimum = Math.min( ...grades ); // вычисляем минимальный балл среди оценок студентов

console.log(minimum); // выводим минимальный балл

const goodGrade = grades.filter(el=>el >= 60); // считаем хорошие оценки, выше или равные 60 баллам

console.log(goodGrade.length); // выводим число студентов с хорошими баллами

const baddGrade = grades.filter(el=>el < 60); // отбираем плохие оценки

console.log(baddGrade.length); // выводим число студентов с плохими баллами

function getGradeNumber(number) {
    if (number >= 80) {
        return "A";
    }

    if (number >= 60) {
        return "B";
    }

    if (number >= 40) {
        return "C";
    }

    if (number >= 20) {
        return "D";
    }

    if (number < 20) {
        return "E";
    } else {
        return "Ошибка!";
    }
}; // фильтруем и перебираем все баллы по диапазону, выводим буквы согласно диапазону, в который попадает оценка

grades.forEach((number) => {
    console.log(getGradeNumber(number))
}); // перебираем функцию getGradeNumber для каждого числа в массиве, выводим в консоль результаты