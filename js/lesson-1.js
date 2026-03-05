// !Завдання 1:

// function getPrompt() {
//   const number = Number(prompt("Введіть число:", ""));

//   if (number === 10) {
//     alert("Вірно");
//   } else {
//     alert("Невірно");
//   }
// }

// getPrompt();

// !Завдання 2:

// const min = Math.floor(Math.random() * 59);

// if (min >= 0 && min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min >= 16 && min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min >= 31 && min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// !Завдання 3:

// const num = Number(prompt("Введіть число від 1 до 4"));
// let result = "";

// switch (num) {
//   case 1:
//     result = "Зима";

//     break;
//   case 2:
//     result = "Весна";

//     break;
//   case 3:
//     result = "Літо";

//     break;
//   case 4:
//     result = "Осінь";

//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// !Завдання 4:

// const userMinutes = Number(prompt("Введіть кількість хвилин:"));

// function getTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(minutes).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}`;
// }
// console.log(getTime(userMinutes));

// !Завдання 4.1:

// const userMinutes = Number(prompt("Введіть кількість секунд:"));

// function getTime(fullTime) {
//   const hour = Math.floor(fullTime / 3600);
//   const minutes = Math.floor((fullTime % 3600) / 60);
//   const seconds = fullTime % 60;

//   const formattedHours = String(hour).padStart(2, "0");
//   const formattedMinutes = String(minutes).padStart(2, "0");
//   const formattedSeconds = String(seconds).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

// console.log(getTime(userMinutes));

// !Завдання 5:

// const login = prompt("Введіть логін:");

// console.log(login);

// if (login === "Адмін") {
//     const password = prompt("Введіть пароль:");
//     if (password === "Я головний") {
//     alert("Добрий день!");
//     } else {
//     alert("Невірний пароль!");
//     }
// } else if (login === "" || login === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// !Завдання 6:

// let num = 0;

// while (num <= 20) {
//   console.log(num++);
// }

// !Завдання 7:

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     console.log(i);

//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getNumbers(1, 10));

// !Завдання 8:

// function min(a, b) {
//   if (Number.isFinite(a) && Number.isFinite(b)) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   } else {
//     return "Not a number!";
//   }
// }

// console.log(min(20, 3));

// !Завдання 9:

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Вам є 18 років?");
//   }
// }

// console.log(isAdult(2));

// !Завдання 10:

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     }
//     }
// }

// fizzBuzz(12);
