alert(`Уважаемые коллеги! Огромная просьба проверять ряботу в Google Chrome по причине того, что Mozilla и Opera не поддерживают import assert {type: json})`)

console.log(`shelter. week-3 - Добавление функционала при помощи JavaScript. Самооценка:
1)Реализация burger menu на обеих страницах: +26
2)Реализация слайдера-карусели на странице Main: +36
3)Реализация пагинации на странице Pets: +36
4)Реализация попап на обеих страницах: +12
Итого: 110 баллов.`)

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
