//task 1
const guestList = ['Маша', 'Леонард', 'Шелдон', 'Джон Сноу'];

// 1. Выведите в кносоль первого гостя
const firstGuest = guestList[0];
console.log(firstGuest);
// Маша

// 2. Выведите в кносоль третьего гостя
const thirdGuest = guestList[2];
console.log(thirdGuest);// Шелдон

// 3. Выведите в консоль девятьсот девятого гостя
const ninehundredninthGuest = guestList[908];
console.log(ninehundredninthGuest); //underfined

//task 2
// Напишите функцию mergeArrays, которая принимает два массива и возвращает новый массив, объединяющий элементы обоих массивов с помощью оператора spread

// Ваш код

// Пример использования
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]