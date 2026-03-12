// !Завдання 1:

// const numbers = [1, 2, 3, 4, 5];

// const secondNumbers = numbers.map((number) => number ** 2)

// console.log(secondNumbers);

// !Завдання 2:

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const value = data.map((d) => d.values).flat();

// console.log(value);

// !Завдання 3:

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const onePeople = people.some((man) => man.age < 20)

// console.log(onePeople);

// !Завдання 4:

// const numbers = [2, 4, 6, 8, 10];

// const evenNumbers = numbers.every((num) => num % 2 === 0);

// console.log(evenNumbers);

// !Завдання 5:

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const unpairedNum = numbers.find((num) => num % 2 !== 0);

// console.log(unpairedNum);

// !Завдання 6:

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.sort((a, b) => a - b)

// console.log(sortedArray);

// !Завдання 7:

// const stringArray = ["banana", "orange", "apple", "pear"];

// const newStringArray = stringArray.sort()

// console.log(newStringArray);

// !Завдання 8:

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sortUsers = users.sort((a, b) => a.age - b.age)

// console.log(sortUsers);

// !Завдання 9:

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const adultUsers = user.filter((u) => u.age > 20)

// console.log(adultUsers);

// !Завдання 10:

// const numbers = [1, 2, 3, 4, 5];

// const totalNumbers = numbers.reduce((acc, num) => acc += num, 0)

// console.log(totalNumbers);

// !Завдання 11:

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
//   divide(value) {
//     if (value !== 0) {
//       this.value /= value;
//     } else {
//       throw new Error("Не можна ділити на 0!");
//     }

//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// !Завдання 12:

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {}
}
