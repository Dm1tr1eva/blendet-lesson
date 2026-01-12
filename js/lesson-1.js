// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);
// Math.floor(Math.random() * (max - min + 1)) + min;

// const min = Math.floor(Math.random() * (59 - 0 + 1)) + 0;

// function rand(min) {

//     if (min <= 15) {
//       alert(`${min} входить в першу чверть`);
//     } else if (min <= 30) {
//       alert(`${min} входить в другу чверть`);
//     } else if (min <= 45) {
//     alert (`${min} входить в третю чверть`);
//     } else if (min <= 59){
//       alert(`${min} входить в четверту чверть`);
//     }
// }

// rand(min)

// ---------------------------------------------------------------------------------

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("число від 1 до 4");

// function season(num) {
//   let result;

//   switch (num) {
//     case "1":
//       result = "зима";
//       break;
//     case "2":
//       result = "весна";
//       break;
//     case "3":
//       result = "літо";
//       break;
//     case "4":
//       result = "осінь";
//       break;
//     default:
//       result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     }

//     return result;
// }

// console.log(season(num));

// ------------------------------------------------------------------------------------------

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const num = Number(prompt("введіть число"));

function whatTime(num) {
  // Перевірка некоректного вводу
  if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) {
    return "Некоректне значення";
  }
  // Обмеження до 24 годин
  const totalMinutes = num % 1440;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const stringHours = String(hours).padStart(2, "0");
  const stringMinutes = String(minutes).padStart(2, "0");

  return `${stringHours}:${stringMinutes}`;
}

console.log(whatTime(num));
