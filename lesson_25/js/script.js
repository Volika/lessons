"use strict"
// ----------1------------------------------
/*
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/
// const items = document.querySelectorAll(".item")

// items.forEach(item => {
//    item.addEventListener("click", () => {
//       item.classList.toggle("active")
//    })
// })

// Отримуємо всі елементи з класом "item"
const items = document.querySelectorAll(".item")
// Функція додає або прибирає клас "active" при кліку
function toggleActive(item) {
   item.classList.toggle("active")
}
// Функція додає обробник події кліку до кожного елемента
function addClickHandlers() {
   for (let i = 0; i < items.length; i++) {
      items[i].onclick = function () {
            toggleActive(items[i])
      }
   }
}
// Викликаємо функцію, щоб активувати клік
addClickHandlers()

// 
// ----------2------------------------------
/*
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/ 
// window.addEventListener("load", () => {
//    document.body.classList.add("loaded")
// })

// Функція додає клас "loaded" до body
function addLoadedClass() {
   document.body.classList.add("loaded")
}
// Функція чекає завантаження сторінки і викликає addLoadedClass
function onWindowLoad() {
   addLoadedClass()
}
// Додаємо обробник події завантаження сторінки
window.addEventListener("load", onWindowLoad)

// 
// ----------3------------------------------
/*
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/ 
// Отримуємо елементи header і footer
const header = document.querySelector("header")
const footer = document.querySelector("footer")
// Додаємо подію наведення миші (hover)
header.addEventListener("mouseenter", () => {
    footer.style.backgroundColor = "lightblue" // Змінюємо фон
})
// Додаємо подію виходу миші
header.addEventListener("mouseleave", () => {
    footer.style.backgroundColor = "" // Повертаємо початковий фон
})
// Отримуємо header і footer
const headerElem = document.querySelector("header")
const footerElem = document.querySelector("footer")
function changeFooterColor() {
    footerElem.style.backgroundColor = "lightblue" // Новий фон
}
function resetFooterColor() {
    footerElem.style.backgroundColor = "" // Скидаємо стиль
}
// Додаємо події наведення та виходу
headerElem.addEventListener("mouseenter", changeFooterColor)
headerElem.addEventListener("mouseleave", resetFooterColor)
//
// ----------4------------------------------
/*
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/ 
// 1. Отримуємо елемент з класом "item"
// const item = document.querySelector(".item-2")

// 2. Функція перевіряє, чи елемент видно на екрані
// function isElementInViewport(element) {
//    const rect = element.getBoundingClientRect()
//    return rect.top >= 0 && rect.bottom <= window.innerHeight
// }

// 3. Функція, яка змінює число в "item"
// function updateCounter(counter, maxCount, delay) {
//     // Запускаємо інтервал, який буде збільшувати число
//    const interval = setInterval(function () {
//       incrementCounter(counter, maxCount, interval)
//    }, delay)
// }

// 4. Функція, яка змінює текст у "item" і перевіряє, чи треба зупиняти таймер
// function incrementCounter(counter, maxCount, interval) {
//     item.textContent = counter // Оновлюємо число на сторінці
//     counter++ // Збільшуємо значення

//     if (counter > maxCount) { // Якщо досягли максимального числа
//         clearInterval(interval) // Зупиняємо інтервал
//    }
// }

// 5. Функція, яка налаштовує лічильник
// function startCounter() {
//     if (item.dataset.started) { // Якщо вже запущено, більше не запускати
//       return
//    }

//    const maxCount = parseInt(item.getAttribute("data-max")) || 10
//    const delay = parseInt(item.getAttribute("data-delay")) || 1000
//    let counter = 1

//     item.dataset.started = "true" // Позначаємо, що лічильник запущено

//     updateCounter(counter, maxCount, delay) // Запускаємо зміну числа
// }

// 6. Функція, яка перевіряє скрол і запускає лічильник
// function checkScroll() {
//     if (isElementInViewport(item)) { // Якщо елемент видно
//         startCounter(); // Запускаємо лічильник
//         window.removeEventListener("scroll", checkScroll) // Видаляємо обробник події
//    }
// }

// 7. Додаємо подію скролу (перевірятиме, коли елемент стане видимим)
// window.addEventListener("scroll", checkScroll)

// Отримуємо елемент-лічильник всередині <span class="item-2">
const scrollElement = document.querySelector(".item-2")
// Отримуємо значення з data-атрибутів або встановлюємо значення за замовчуванням
const interval = parseInt(scrollElement.dataset.interval) || 100 // Час між змінами
const maxNumber = parseInt(scrollElement.dataset.maxnumber) || 5 // До якого числа рахуємо
// Функція перевіряє, чи елемент видно на екрані
function isElementInViewport(element) {
   const rect = element.getBoundingClientRect()
   return rect.top >= 0 && rect.bottom <= window.innerHeight
}
// Функція для запуску лічильника
function startCounter() {
    if (scrollElement.dataset.started) { // Якщо лічильник вже запущений, не запускаємо знову
      return
   }
   let counter = 1
    scrollElement.dataset.started = "true" // Позначаємо, що лічильник запущено
   const timer = setInterval(function () {
        scrollElement.textContent = counter // Оновлюємо тільки число всередині <span>
      counter++
        if (counter > maxNumber) { // Якщо досягли maxNumber, зупиняємо лічильник
            clearInterval(timer)
      }
   }, interval)
}
// Функція перевіряє скрол і запускає лічильник
function checkScroll() {
    if (isElementInViewport(scrollElement)) { // Якщо елемент видно
        startCounter(); // Запускаємо лічильник
        window.removeEventListener("scroll", checkScroll) // Видаляємо обробник події скролу
   }
}
// Додаємо подію скролу
window.addEventListener("scroll", checkScroll)

