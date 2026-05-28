// console.log("\n=== Деструктуризация массивов ===");

// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("\n=== Деструктуризация объектов ===");
// const user = { name: "Алиса", age: 25, city: "Москва" };
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: fullName, age: years } = user;
// console.log(fullName, years);
// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("=== Деструктуризация в параметрах ===");
// const user = { name: "Алиса", age: 25, city: "Москва" };

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`)
//     console.log(`Возраст: ${user.age}`); 
//     console.log(`Город: ${user.city}`);
// }
// function printUser({name, age, city}) {
//     console.log(`Имя: ${name}`)
//     console.log(`Возраст: ${age}`); 
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);
// 1. Создайте объект product со свойствами: name, price, category, inStock
// const product = {
//     name: "Ноутбук",
//     price: 50000,
//     category: "Электроника",
//     inStock: true
// };
// // 2. Используя деструктуризацию, извлеките все свойства
// const { name, price, category, inStock } = product;
// console.log("Деструктуризация объекта product:");
// console.log("Название:", name);
// console.log("Цена:", price);
// console.log("Категория:", category);
// console.log("В наличии:", inStock);
// // 3. Создайте функцию printProduct, которая принимает объект и использует деструктуризацию в параметрах
// function printProduct({ name, price, category, inStock }) {
//     console.log("\nИнформация о продукте (через функцию):");
//     console.log(`Товар: ${name}`);
//     console.log(`Цена: ${price} руб.`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }

// // 4. Выведите информацию о продукте
// printProduct(product);

// console.log("Sread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//     name: "Иван",
//     age: 30,
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10,20,30,40,50];

// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// 1. Создайте два массива чисел
// const numbers1 = [10, 20, 30];
// const numbers2 = [40, 50, 60];

// // 2. Объедините их с помощью spread
// const combinedNumbers = [...numbers1, ...numbers2];
// console.log("Объединённый массив:", combinedNumbers);

// // 3. Создайте функцию findMax, которая принимает любое количество чисел (rest) и возвращает максимальное
// function findMax(...numbers) {
//     return Math.max(...numbers);
// }

// console.log("Максимальное из (10, 20, 30):", findMax(10, 20, 30));
// console.log("Максимальное из (5, 15, 25, 35, 45):", findMax(5, 15, 25, 35, 45));
// console.log("Максимальное из объединённого массива:", findMax(...combinedNumbers));

// // 4. Создайте два объекта и объедините их
// const obj1 = {
//     brand: "Apple",
//     model: "MacBook Pro"
// };

// const obj2 = {
//     price: 120000,
//     year: 2024
// };

// const combinedObjects = { ...obj1, ...obj2 };
// console.log("Объединённый объект:", combinedObjects);
// import { greet, add, PI } from './utils.js';
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);
// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// // 4. Импортируйте всё это в main.js
// import { square, cube, E } from "./math.js";

// // 5. Протестируйте функции
// console.log(" Тест math.js");
// console.log("Квадрат числа 5:", square(5));
// console.log("Куб числа 3:", cube(3));
// console.log("Куб числа 4:", cube(4));
// console.log("Константа E:", E);
// console.log("Квадрат E:", square(E));

// console.log("Промисы");

// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });
// simplePromise
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(`пРОШЛО ${ms} миллисекунд`);
//         }, ms);
//     });
// }
// delay(1000)
// .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({ id: userId, name: "Алиса", email: "dfgfg@mail.com" });
//             } else {
//                 reject("некорректный ID пользователя");
//             }
//         }, 1500);
//     });
// }
// fetchUserData(1)
//     .then((user) => console.log("Пользователь:", user))
//     .catch((error) => console.log("Ошибка:", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершен"), 500);
//     });
// }

// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
//     });
// }

// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
//     });
// }
// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке", error));

// 1. Создайте функцию checkInventory, которая возвращает промис
function checkInventory(product, quantity) {
    return new Promise((resolve, reject) => {
        const inventory = {
            "ноутбук": 10,
            "телефон": 0,
            "наушники": 5,
            "клавиатура": 0
        };
        
        setTimeout(() => {
            const stock = inventory[product.toLowerCase()];
            
            if (stock !== undefined && stock >= quantity) {
                resolve(`Товар "${product}" есть в наличии (${stock} шт.). Заказано: ${quantity} шт.`);
            } 
            // 3. Если товара нет — reject с ошибкой
            else if (stock !== undefined && stock === 0) {
                reject(`Ошибка: Товар "${product}" отсутствует`);
            }
            else if (stock !== undefined && stock < quantity) {
                reject(`Ошибка: Товара "${product}" недостаточно. В наличии только ${stock} шт.`);
            }
            else {
                reject(`Ошибка: Товар "${product}" не найден`);
            }
        }, 1000);
    });
}

// 4. Используйте .then() и .catch() для обработки результата
console.log("\n=== Проверка наличия товаров ===\n");

checkInventory("ноутбук", 3)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

checkInventory("телефон", 1)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

checkInventory("наушники", 2)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

checkInventory("клавиатура", 1)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

checkInventory("мышь", 1)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));