let burgerImage = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuList = document.querySelector(".menu-list");
let body = document.querySelector(".body");
let menuItem = document.querySelectorAll(".menu-item");
let overlay = document.querySelector(".overlay");

function openOrCloseBurger(event) {
  event.stopPropagation();
  if (!menu.classList.contains("burger-open")) {
    overlay.style.display = "block";
    menu.classList.toggle("burger-open");
    menu.style.right = "0%";
    burgerImage.style.transform = "rotate(90deg)";
  } else {
    menu.classList.toggle("burger-open");
    overlay.style.display = "none";
    menu.style.right = "-100%";
    burgerImage.style.transform = "rotate(0deg)";
  }
}

burgerImage.addEventListener("click", openOrCloseBurger);
overlay.addEventListener("click", openOrCloseBurger);
menuItem.forEach((element) =>
  element.addEventListener("click", openOrCloseBurger)
);
