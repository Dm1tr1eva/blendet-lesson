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

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (Array.isArray(numbers)) {
    return Math.min(...numbers);
  } else {
    return "Sory, it is not an array!";
  }
}

console.log(findSmallestNumber(numbers));
