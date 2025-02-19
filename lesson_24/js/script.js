"use strict"
// ----------1------------------------------
// Отримати в константу елемент <body>

const elementBody = document.body
console.log(elementBody)

// ----------2------------------------------
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)

// список UL додаємо всередині <main> після <div class="section-hero hero"> 
// 
// Отримуємо <div class="section-hero hero">

// const heroDiv = document.querySelector(".section-hero.hero");
   // heroDiv.insertAdjacentHTML("beforeend", `додаємо всередині < div class="section-hero hero">  наприкінці  ${createString}`);


// const myDiv = document.querySelector("main div");
// function createList(count = 3) {
//    let createString = `<ul class="items">`;
//    for (let i = 1; i <= count; i++) {
//       createString += `<li class="item">Елемент списку ${i}</li>`;
//    }
//    createString += `</ul>`;
//    myDiv.insertAdjacentHTML("afterbegin", `всередині < main > на початку першого < div> ${createString}<br>`);
// }

// let userInput = prompt("Введіть кількість елементів у списку:", "3");
// let itemCount = userInput ? parseInt(userInput) : undefined;
// createList(itemCount);
// 
// ----------3------------------------------
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
// 
// Додаємо клас "loaded" до <body>
// document.body.classList.add("loaded")

// Перевіряємо, чи є у <body> клас "loaded"
// і додаємо стиль (змінюємо колір тексту на зелений)
   // if (document.body.classList.contains("loaded")) {
   //    document.body.style.color = "green";
   //    document.querySelectorAll("h1, h2, h3, p").forEach(el => {
   //    el.style.color = "green";
   //    });
   // }  
// 
   // ----------4------------------------------
//    Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
//
// Отримуємо всі елементи з класом "item"
const items = document.querySelectorAll(".item")
items.forEach((item, index) => {
   item.classList.add("active") 
   item.textContent = `Елемент №${index + 1}`
})
// 
// ----------5------------------------------
//Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(".button");
if (button) {
   button.scrollIntoView({ behavior: "smooth" });
}
document.querySelector(".button")?.scrollIntoView({ behavior: "smooth" });
// 
// ----------6------------------------------
//Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
const link = document.querySelector(".link");
if (link) {
   link.dataset.value = "100";
   const dataValue = parseInt(link.dataset.value);

   if (dataValue < 200) {
      link.style.color = "red";
   }
} else {
   console.warn("Елемент з класом .link не знайдено!");
}