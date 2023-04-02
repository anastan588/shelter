import pets from "../data/pets.json" assert { type: "json" };
let cardsContainerDefault = document.querySelector(".slider_container");
let cardsCollectionStatic = document.querySelectorAll(".card");
let cardsCollection = document.getElementsByClassName("card");
let rightArrowButton = document.querySelector(".right");
let leftArrowButton = document.querySelector(".left");

console.log(pets);
console.log(cardsCollectionStatic);
console.log(cardsContainerDefault);
console.log(leftArrowButton);
let randomPetsArray = [];

function getRandomCardsArray() {
  for (let i = 0; i < 6; i++) {
    let namesArray = [];
    let names = [];
    for (let j = 0; j < pets.length; j++) {
    //   console.log(pets[j].name);
      names.push(pets[j].name);
    //   console.log(names);
    }
    namesArray = names.sort(() => Math.random() - 0.5);
    // console.log(namesArray);
    randomPetsArray.push(namesArray);
    namesArray = [];
  }
  console.log(randomPetsArray);
  return randomPetsArray;
}

function fillCards() {
    for (let i = 0; i < cardsCollection.length; i++) {
      for (let j = 0; j < pets.length; j++) {
        if (randomPetsArray[0][i] === pets[j].name) {
          cardsCollection[i].firstElementChild.src = pets[j].imgforcards;
          cardsCollection[i].children[1].textContent = pets[j].name;
        }
      }
    }
  }
  

  function makeNewSlide(nextSlider) {

  }

function moveSlideLeft() {
     console.log(this);
     let nextSlider = {};
     nextSlider = makeNewSlide(nextSlider);
}

function moveSlideRight() {
    console.log(this);
}


getRandomCardsArray();
fillCards();
console.log(cardsCollection);
rightArrowButton.addEventListener("click", moveSlideLeft);
leftArrowButton.addEventListener("click", moveSlideRight);