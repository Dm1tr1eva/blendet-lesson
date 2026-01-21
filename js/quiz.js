// Функція calculateTotal(number) приймає ціле число
// (параметр number). Доповни код функції так,
// щоб вона повертала суму всіх цілих чисел від одиниці до
// цього числа включно. Наприклад, якщо number дорівнює 3,
//  то сума - це 1 + 2 + 3, тобто 6.

//! function calculateTotal(number) {
//!   let sum = 0;
//!   let current = 1;

//!   while (current <= number) {
//!     sum += current;
//!     current += 1;
//!   }

//!   return sum;
//! }

//? console.log(calculateTotal(1));
//? // 1
//? console.log(calculateTotal(3));
//? // 6
//? console.log(calculateTotal(0));
//? // 0
//? console.log(calculateTotal(18));
//? // 171
//? console.log(calculateTotal(24));
//? // 300

// ------------------------------------------------------------------

// Функція calculateTotal(number) приймає ціле число
// (параметр number) Використовуючи цикл for,
// доповни код функції так, щоб вона повертала суму всіх
// цілих чисел від одиниці до цього числа включно.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3,
//  тобто 6.

//! function calculateTotal(number) {
//!   let sum = 0;

//!   for (let i = 1; i <= number; i += 1) {
//!     sum += i;
//!   }

//!   return sum;
//! }

//? console.log(calculateTotal(1));
//? // 1
//? console.log(calculateTotal(0));
//? // 0
//? console.log(calculateTotal(7));
//? // 28
//? console.log(calculateTotal(18));
//? // 171
//? console.log(calculateTotal(24));
//? // 300

// ------------------------------------------------------------------

// Функція calculateEvenTotal(number) приймає ціле число
// (параметр number). Доповни код функції так, щоб вона
// повертала суму всіх парних цілих чисел від одиниці до
//  цього числа включно. Парні числа — це ті, що можна
// поділити на 2 без остачі (як це зробити розглядалося
// у темі Арифметичні операції у модулі 1). Наприклад,
// якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

//! function calculateEvenTotal(number) {
//!   let sum = 0;
//!   for (let i = 1; i <= number; ++i) {
//!     if (i % 2 === 0) {
//!       sum += i;
//!     }
//!   }
//!   return sum;
//! }

//? console.log(calculateTotal(1));
//? // 0
//? console.log(calculateTotal(3));
//? // 2
//? console.log(calculateTotal(7));
//? // 12
//? console.log(calculateTotal(18));
//? // 90
//? console.log(calculateTotal(27));
//? // 182

// ------------------------------------------------------------------

// Доповни код таким чином, щоб у змінну number записувалося
//  перше число у проміжку від start до end, яке ділиться на
// 5 без остачі.

//! const start = 6;
//! const end = 17;
//! let number;

//! for (let i = start; i <= end; ++i) {
//!   if (i % 5 === 0) {
//!     number = i;
//!     break;
//!   }
//! }

//? console.log(number);
//? // 10

// ------------------------------------------------------------------

// Функція findNumber(start, end, divisor) приймає три параметра,
//  які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно,
// яке ділиться на divisor без остачі

// не використовуй оператор break

//! function findNumber(start, end, divisor) {
//!   for (let i = start; i <= end; ++i) {
//!     if (i % divisor === 0) {
//!       return i;
//!     }
//!   }
//! }

//? console.log(findNumber(2, 6, 5));
//? // 5
//? console.log(findNumber(8, 17, 3));
//? // 9
//? console.log(findNumber(6, 9, 4));
//? // 8
//? console.log(findNumber(16, 35, 7));
//? // 21

// ------------------------------------------------------------------

// Функція getLastElementMeta(array) приймає один параметр
// array - масив довільних значень. Доповни код функції таким
//  чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

//! function getLastElementMeta(array) {
//!   const lastIndex = array.length - 1;
//!   const lastElement = array[lastIndex];
//!   const newArray = [lastIndex, lastElement];
//!   return newArray;
//! }

//? console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
//? // [3, "banana"]
//? console.log(getLastElementMeta(["apple", "peach", "pear"]));
//? // [2, "pear"];
//? console.log(getLastElementMeta(["apple", "peach"]));
//? // [1, "peach"]
//? console.log(getLastElementMeta(["apple"]));
//? // [0, "apple"]

// ------------------------------------------------------------------

// Функція getExtremeElements(array) приймає один параметр
// array - масив елементів довільної довжини. Доповни код
// функції таким чином, щоб вона повертала масив з двох
// елементів - першого і останнього елементів параметра array.

//! function getExtremeElements(array) {
//!   const lastIndex = array.length - 1;
//!   const lastElement = array[lastIndex];

//!   const firstElement = array[0];

//!   const newArray = [firstElement, lastElement];
//!   return newArray;
//! }

//? console.log(getExtremeElements([1, 2, 3, 4, 5]));
//? // [1, 5]
//? console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//? // ["Earth", "Venus"]
//? console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
//? // ["apple", "banana"]

// ------------------------------------------------------------------

// Функція getLength(array) очікує один параметр array -
// масив довільних значень. Доповни код функції так, щоб
// вона перетворювала масив у рядок, без роздільників, і
//  повертала кількість символів в отриманому рядку.

//! function getLength(array) {
//!   const string = array.join("");
//!   const symbol = string.length;
//!   return symbol;
//! }

//? console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
//? // 22
//? console.log(getLength(["M", "a", "n", "g", "o"]));
//? // 5
//? console.log(getLength(["top", "picks", "for", "you"]));
//? // 14

// ------------------------------------------------------------------

// Сервісу гравірування прикрас потрібна функція, яка б
// автоматично рахувала ціну гравірування, залежно від кількості
//  слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі
//  слів, розділених лише пробілами (параметр message) та другим
//  параметром - число, що містить ціну гравірування за одне
// слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість
//  гравірування усіх слів в рядку.

//! function calculateEngravingPrice(message, pricePerWord) {
//!   const words = message.split(" ");
//!   const quantityWords = words.length;
//!   const allPrice = quantityWords * pricePerWord;
//!   return allPrice;
//! }

//? console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//? // 50
//? console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//? // 100
//? console.log(calculateEngravingPrice("Web-development is creative work", 40));
//? // 160
//? console.log(calculateEngravingPrice("Web-development is creative work", 20));
//? // 80

// ------------------------------------------------------------------

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку

// Доповни код функції getSlice(array, value) так, щоб вона
// виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value

// підмасив, що починається з початку array і до елемента зі
// значенням value включно, якщо такий елемент є в array

//! function getSlice(array, value) {
//!   const indexArray = array.indexOf(value) + 1;
//!   const newArray = array.slice(array, indexArray);

//!   if (array.indexOf(value) === -1) {
//!     return [];
//!   } else {
//!     return newArray;
//!   }
//! }

//? console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
//? // ["Mango", "Poly"];
//? console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
//? // ["Mango", "Poly", "Ajax"];
//? console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
//? // ["Mango"]
//? console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
//? // []
//? console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
//? // []

// ------------------------------------------------------------------

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//  щоб вона повертала масив усіх цілих чисел від значення min до
//  max включно.

//! function createArrayOfNumbers(min, max) {
//!   const numbers = [];

//!   for (let i = min; i <= max; i++) {
//!     numbers.push(i);
//!   }

//!   return numbers;
//! }

//? console.log(createArrayOfNumbers(1, 3));
//? // [1, 2, 3];
//? console.log(createArrayOfNumbers(14, 17));
//? // [14, 15, 16, 17]
//? console.log(createArrayOfNumbers(29, 34));
//? // [29, 30, 31, 32, 33, 34]

// ------------------------------------------------------------------

// Функція calculateTotalPrice(order) приймає один параметр
// order - масив чисел. Доповни функцію так, щоб вона повертала
//  загальну суму елементів з масиву order.

//! function calculateTotalPrice(order) {
//!   let sum = 0;

//!   for (let i = 0; i < order.length; i += 1) {
//!     sum += order[i];
//!   }

//!   return sum;
//! }

//? console.log(calculateTotalPrice([12, 85, 37, 4]));
//? // 138
//? console.log(calculateTotalPrice([164, 48, 291]));
//? // 503
//? console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//? // 1116

// ------------------------------------------------------------------

// Функція getEvenNumbers(start, end) має два параметри start
//  та end, які є цілими числами. Доповни код функції так, щоб
//  вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
//  Парним вважається число, яке ділиться на 2 без остачі
// (10 % 2 === 0). Використовуй цикл for.

//! function getEvenNumbers(start, end) {
//!   const array = [];

//!   for (let i = start; i < end + 1; i++) {
//!     if (i % 2 === 0) {
//!       array.push(i);
//!     }
//!   }

//!   return array;
//! }

//? console.log(getEvenNumbers(2, 5));
//? // [2, 4]
//? console.log(getEvenNumbers(3, 11));
//? // [4, 6, 8, 10]
//? console.log(getEvenNumbers(6, 12));
//? // [6, 8, 10, 12];
//? console.log(getEvenNumbers(8, 8));
//? // [8]
//? console.log(getEvenNumbers(7, 7));
//? // []

// ------------------------------------------------------------------

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно
// перевірити

// Доповни код функції таким чином, щоб вона перевіряла,
// чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва
// товара, якщо товар було знайдено

// рядок "Sorry! We are out of stock!", якщо такого товара немає
//  в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від
// регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені
// у масиві ["apple", "plum", "pear"].

//! function checkStorage(storage, item) {
//!   const newItem = item.toLowerCase();
//!   const newStorage = [];
//!   function putToLowerCase(array) {
//!     array.forEach((element) => {
//!       newStorage.push(element.toLowerCase());
//!     });
//!   }
//!   putToLowerCase(storage);

//!   if (newStorage.includes(newItem)) {
//!     return `${newItem} is available to order!`;
//!   } else {
//!     return "Sorry! We are out of stock!";
//!   }
//! }

//? console.log(checkStorage(["apple", "plum", "pear"], "plum"));
//? // "plum is available to order!"
//? console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
//? // "plum is available to order!"
//? console.log(checkStorage(["apple", "plum", "pear"], "pear"));
//? // "pear is available to order!"
//? console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
//? // "pear is available to order!";
//? console.log(checkStorage(["apple", "plum", "pear"], "orange"));
//? // "Sorry! We are out of stock!";
//? console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
//? // "Sorry! We are out of stock!";

// ------------------------------------------------------------------

// Функція getCommonElements(array1, array2), приймає два масиви
//  (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.

// Використай цикл for для ітерації кожного елемента у array1.

// У тілі циклу перевір, чи поточний елемент існує у array2 за
// допомогою методу includes.

// Якщо він існує, то додай елемент до нового масиву.

// Поверни наповнений масив спільних елементів як результат
//  роботи функції.

//! function getCommonElements(array1, array2) {
//!   const newArray = [];

//!     for (let i = 0; i < array1.length; i++) {
//!         if (array2.includes(array1[i])) {
//!           newArray.push(array1[i]);
//!        }
//!     }
//!     return newArray;
//! }

//? console.log(getCommonElements([1, 2, 3], [2, 4]));
//? // [2]
//? console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//? // [1, 2]
//? console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//? // [12, 27, 3]
//? console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//? // [10, 30, 40]
//? console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//? []

// ------------------------------------------------------------------

// Виконай рефакторинг функції countProps(object), замінивши
// перебір ключів за допомогою циклу for…in на метод Object.keys()
//  для отримання масиву властивостей. Функція має повернути
//  кількість властивостей в об'єкті object.

//! function countProps(object) {
//!   const keys = Object.keys(object);
//!   return keys.length;
//! }

//? console.log(countProps({}));
//? // 0
//? console.log(countProps({ name: "Mango", age: 2 }));
//? // 2
//? console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
//? // 3

// ------------------------------------------------------------------

// Масив colors містить колекцію кольорів. Кожен колір
//  представлений об'єктом і має властивості hex і rgb
//  з відповідними для цього формату і кольору
//  значеннями.

// Перебери масив об'єктів colors, використовуючи цикл
// for...of. Додай у масив hexColors значення
// властивостей hex, а в масив rgbColors - значення
//  властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors);
// // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// ------------------------------------------------------------------

// Напиши функцію getAllPropValues(propName), яка приймає один
//  параметр propName - ім'я (ключ) властивості. Функція повинна
//  повернути масив усіх значень властивості з таким ім'ям з
// кожного об'єкта в масиві products. Якщо в об'єктах відсутні
//  властивості з таким ім'ям, функція повинна повернути порожній
//  масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const array = [];

//   for (const product of products) {
//     if (propName in product) {
//       array.push(product[propName]);
//     }
//   }

//   return array;

//   return [];
// }

// console.log(getAllPropValues("name"));
// // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));
// // [4, 3, 7, 9];
// console.log(getAllPropValues("price"));
// // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));
// // [];

// ------------------------------------------------------------------

// Функція calculateTotalPrice(productName) приймає один параметр
//  productName- назва товару. Функція містить масив об'єктів
//  products з такими властивостями, як name — ім'я товару,
//  price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість
//  (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна
//  повертати рядок "Product <productName> not found!" , де
//  <productName> — це ім'я товару.

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice("Blaster"));
// "Product Blaster not found!";
console.log(calculateTotalPrice("Radar"));
// 5200;
console.log(calculateTotalPrice("Droid"));
// 2800;
console.log(calculateTotalPrice("Grip"));
// 10800;
console.log(calculateTotalPrice("Scanner"));
// 8100;
