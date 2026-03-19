// // !Завдання 1:

// // 1 - отримай body елемент і виведи його в консоль;

// const body = document.querySelector("body");

// console.log(body);

// // 2 - отримай елемент id="title" і виведи його в консоль;

// const title = document.querySelector("#title");

// console.log(title);

// // 3 - отримай елемент class="list" і виведи його в консоль;

// const list = document.querySelector(".list");

// console.log(list);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const dataTopic = document.querySelectorAll("[data-topic]");

// console.log(dataTopic);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом
// //  data-topic і виведи його в консоль;

// const firstElem = document.querySelector("[data-topic]");

// console.log(firstElem);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом
// //  data-topic і виведи його в консоль;

// const lastElem = document.querySelector("ul li[data-topic]:last-child");

// console.log(lastElem);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const elementSibling = title.nextElementSibling;

// console.log(elementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const allTitles = document.querySelectorAll("h3");

// console.log(allTitles);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір
// //  заголовка на червоний колір

// allTitles.forEach((title) => title.classList.add("active"));

// // 10 - знайти елемент li який має атрибут data-topic з значенням
// // "navigation" і виведи його в консоль;

// const dataAtribute = document.querySelector('[data-topic="navigation"]');

// console.log(dataAtribute);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут
// //  style і зроби його backgroundColor жовтим

// dataAtribute.setAttribute("style", "background-color: yellow");

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни
// // його текст на "Я змінив тут текст!".

// const modifiedText = dataAtribute.querySelector("p");
// console.log(modifiedText);

// modifiedText.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього
// // знайди елемент у якогоо атрибут data-topic має значення, яке
// // зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";

// const manipulationAtribute = document.querySelector(
//   `[data-topic="${currentTopic}"]`,
// );
// console.log(manipulationAtribute);

// // 14 - додай до знайденого елемента атрибут style і зроби його
// // backgroundColor блакитним;

// manipulationAtribute.setAttribute("style", "background-color: lightblue");

// // 15 - знайти в документі заголовок, який має class="completed"
// //  і виведи його в консоль;

// const completedTitle = document.querySelector(".completed");
// console.log(completedTitle);

// // 16 - видали елемент li в якому знаходиться заголовок, який
// // має class="completed"

// const parentAttribute = completedTitle.parentElement;
// console.log(parentAttribute);

// parentAttribute.remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент
// //  p і задай йому наступний текст: "Об'єктна модель документа
// //  (Document Object Model)"

// const newText = document.createElement("p");
// title.append(newText);

// newText.textContent = "Об'єктна модель документа (Document Object Model)";

// // 18 - додай новий елемент списку у кінець списка, його заголовок
// //  це - "Властивість innerHTML" а опис (р) - "Ще один спосіб
// // створити DOM-елементи і помістити їх в дерево - це використовувати
// // рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // тобто, потрібно створити елемент LI потім наповнити H3 та P і
// // готову LI закинути у кінець списку

// list.innerHTML +=
//   "<li><h3> Властивість innerHTML</h3 ><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li >";

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const markup = `<li>
// <h3> Властивість innerHTML</h3 >
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
//  використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//  </li > `;
// list.insertAdjacentHTML("beforeend", markup);

// // 20 - очисти список

// list.innerHTML = "";

// !Завдання 2:

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const div = document.createElement("div");
// div.classList.add("number-container");

// for (let i = 0; i < 100; i++){
//     const num = randomNumber()

//     const container = `<div class="number">${num}</div>`
//     div.insertAdjacentHTML("beforeend", container)

//     const lastBlock = div.lastElementChild

//     if (i % 2 === 0) {
//         lastBlock.classList.add("even");
//     } else {
//         lastBlock.classList.add("odd");
//     }
// }

// document.body.appendChild(div);

// !Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// const form = document.querySelector(".js-contact-form");
// const input = document.querySelector(".js-username-input");
// const btn = document.querySelector(".js-contact-form-submit");
// const checkbox = document.querySelector(".js-policy-checkbox");
// const span = document.querySelector(".js-username-output");

// // 1 - При події `input`, якщо користувач ввів в поле більше
// // 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// // то клас `error`

// input.addEventListener("input", (e) => {
//   if (input.value.length > 6) {
//     input.classList.remove("error");
//     input.classList.add("success");
//   } else {
//     input.classList.remove("success");
//     input.classList.add("error");
//   }
// });

// // 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener("focus", () => {
//   if (input.value.length === 0) {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// });

// // 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener("blur", () => {
//   if (input.value.length === 0) {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid lime";
//   }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// input.addEventListener("input", (e) => {
//   const userName = input.value.trim();

//   if (userName === "") {
//     span.textContent = "Anonymous";
//   } else {
//     span.textContent = userName;
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const imputName = input.value.trim();

//   if (input.value.length !== 0 && checkbox.checked === true) {
//     const userData = {
//       name: imputName,
//     };

//     console.log(userData);
//   } else {
//     alert("Error");
//   }

//   input.value = "";
//   checkbox.checked = false;
//   span.textContent = "Anonymous";
// });

// !Завдання 4:

// const box = document.querySelector(".box");
// const decrease = document.querySelector(".js-decrease");
// const increase = document.querySelector(".js-increase");

// // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів

// decrease.addEventListener("click", () => {
//   const width = parseInt(getComputedStyle(box).width) - 20;
//   const height = parseInt(getComputedStyle(box).height) - 20;

//   box.style.width = `${width}px`;
//   box.style.height = `${height}px`;
// });

// // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів

// increase.addEventListener("click", () => {
//   const width = parseInt(getComputedStyle(box).width) + 20;
//   const height = parseInt(getComputedStyle(box).height) + 20;

//   box.style.width = `${width}px`;
//   box.style.height = `${height}px`;
// });