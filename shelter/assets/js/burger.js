// alert(`Уважаемые коллеги! Не забываем при проверке адаптивности поставить в Chrome Devtools Device type: Mobile. Всем высоких оценок и добрых проверяющих)`)

// console.log(`shelter. week-2 - Адаптивная вёрстка. Самооценка:
// 1)Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
// 2)Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
// 3)Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
// 4)Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
// 5)Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
// 6)Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
// 7)Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, 
// справа от отдельных блоков не появляются белые поля. 
// Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
// 8)Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px 
// верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, 
// не наезжают друг на друга, изображения могут менять размер, 
// но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8
// 9)При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
// 10)Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8
// Итого: 100 баллов.`)

let burgerImage = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuList = document.querySelector(".menu-list");
export let body = document.querySelector(".body");
let menuItem = document.querySelectorAll(".menu-item");
export let overlay = document.querySelector(".overlay");

function openOrCloseBurger(event) {
  event.stopPropagation();
  //console.log(event);
  //console.log(window.innerWidth);
  //console.log(typeof window.innerWidth);
  let styleOfOverlay = getComputedStyle(overlay);
  if (
    !menu.classList.contains("burger-open") &&
    window.innerWidth <= 767 &&
    styleOfOverlay.display === "none"
  ) {
    overlay.style.display = "block";
    menu.classList.toggle("burger-open");
    menu.style.right = "0%";
    burgerImage.style.transform = "rotate(90deg)";
    body.style.overflow = "hidden";
  } else {
    menu.classList.toggle("burger-open");
    overlay.style.display = "none";
    menu.style.right = "-100%";
    burgerImage.style.transform = "rotate(0deg)";
    body.style.overflow = "auto";
  }
}

burgerImage.addEventListener("click", openOrCloseBurger);
overlay.addEventListener("click", openOrCloseBurger);
menuItem.forEach((element) =>
  element.addEventListener("click", openOrCloseBurger)
);
