// !Завдання 1:
// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");

// styles[1] = "classic";
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// console.log(logItems(styles));

// !Завдання 2:

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Ім'я:");
//   const loginName = array.includes(name);

//       if (loginName === true) {
//         return alert(`Welcome, ${name}!`);
//       } else {
//         return alert("User not found");
//       }
// }

// console.log(checkLogin(logins));

// !Завдання 3:

// function caclculateAverage() {
//   let total = 0;

//   for (const arg of arguments) {
//     if (typeof arg === "number") {
//       total += arg;
//     }
//   }

//   const result = total / arguments.length;
//   return result;
// }

// console.log(caclculateAverage(14, 26, 33));

// !Завдання 4:

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumOfAdjacentNumbers(array) {
//   let newArray = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     newArray.push(array[i] + array[i + 1]);
//     }

//     return newArray
// }

// console.log(sumOfAdjacentNumbers(someArr));

// !Завдання 5:

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     return "Sory, it is not an array!";
//   }
// }

// console.log(findSmallestNumber(numbers));

// !Завдання 6:

// function findLongestWord(string) {
//   const stringArray = string.split(" ");
//   console.log(stringArray);

//   let biggest = stringArray[0];

//   for (let i = 1; i < stringArray.length; i++) {
//     if (stringArray[i].length > biggest.length) {
//       biggest = stringArray[i];
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// !Завдання 7:

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// !Завдання 8:

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const sum = Object.values(salaries).reduce((acc, value) => acc + value, 0);

// console.log(sum);

// !Завдання 9:

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },
//   sum() {
//     if (this.exist() === true) {
//       return this.a + this.b;
//     } else {
//       return "No such propeties";
//     }
//   },
//   mult() {
//     if (this.exist() === true) {
//       return this.a * this.b;
//     } else {
//       return "No such propeties";
//     }
//   },
// };

// calculator.read(5, 3);
// console.log(calculator.sum());
// console.log(calculator.mult());

// !Завдання 10:

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calcTotalPrice(fruits, "Банан"));
