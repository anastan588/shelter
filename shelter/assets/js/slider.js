import pets from "../data/pets.json" assert { type: "json" };
let cardsCollection = document.getElementsByClassName("card");
let cardsCollectionStatic = document.querySelectorAll(".card");
let arrowImageLeft = document.querySelector(".left-image");
let arrowImageRight = document.querySelector(".right-image");
let mainContainer = document.querySelector(".main-slider-container");
let cardsContainerDefault = document.querySelector(".slider_container");
let rightArrowButton = document.querySelector(".right");
let leftArrowButton = document.querySelector(".left");
let randomPetsArray = [];
let cardsArray = [];
let numberOfActiveCards = 0;
let countOfeventNumber = 0;
let countEventsForNoRepearting = 0;
let element = "";
let previousContainerCardsInSave = [];
let previousButtonInSave = "";
let currenteventelement = "";
let secondPreviuosCardsInSave = [];

function getRandonArrayOfPets() {
  let petsArray = [];
  for (let i = 0; i < pets.length; i++) {
    petsArray.push(pets[i].name);
  }
  // console.log(petsArray);
  randomPetsArray = petsArray.sort(() => Math.random() - 0.5);
  // randomPetsArray = petsArray;
  console.log(randomPetsArray);
  return randomPetsArray;
}

function fillCards() {
  for (let i = 0; i < cardsCollection.length; i++) {
    for (let j = 0; j < pets.length; j++) {
      if (randomPetsArray[i] === pets[j].name) {
        cardsCollection[i].firstElementChild.src = pets[j].imgforcards;
        cardsCollection[i].children[1].textContent = pets[j].name;
      }
    }
  }
  countOfeventNumber = 0;
  previousButtonInSave = "";
  currenteventelement = "";
  element = "";
  // console.log(previousButtonInSave);
  return countOfeventNumber;
}

function receiveNumberOfActiveCards(event) {
  setTimeout(() => {
    //console.log(cardsArray.length);
    if (cardsArray.length !== 0) {
      cardsArray = [];
    }
    // console.log(cardsArray.length);
    let cardsCollectionStatic = document.querySelectorAll(".card");
    //console.log(cardsCollectionStatic);
    for (let i = 0; i < cardsCollectionStatic.length; i++) {
      //console.log(cardsCollectionStatic);
      let styleOfCard = getComputedStyle(cardsCollectionStatic[i]);
      //console.log(styleOfCard.display);
      if (styleOfCard.display === "flex") {
        cardsArray.push(cardsCollectionStatic[i].children[1].textContent);
      }
    }
    numberOfActiveCards = cardsArray.length;
    //console.log(cardsArray);
    //console.log(numberOfActiveCards);
    return numberOfActiveCards;
  }, 100);
}

function setMaxWidthForMainContainer() {
  setTimeout(() => {
    let cardsContainer = document.querySelector(".slider_container");
    let styleOfContainer = getComputedStyle(cardsContainer);
    console.log(styleOfContainer.width);
    mainContainer.style.maxWidth = styleOfContainer.width;
  }, 1500);
}

function getDefaultContainer() {
  let cardsCurrentContainer = document.querySelector(".slider_container");
  if (
    cardsCurrentContainer.children.length <
    cardsContainerDefault.children.length
  ) {
    //console.log(cardsCurrentContainer);
    //console.log(cardsContainerDefault);
    cardsContainerDefault.style.marginLeft = "0";
    cardsContainerDefault.style.marginRight = "0";
    mainContainer.append(cardsContainerDefault);
    mainContainer.firstElementChild.remove();
  }
}

function countOfevent(event) {
  //console.log(element);
  let type = event.type;
  currenteventelement = this;
  //console.log(this);
  //console.log(previousButtonInSave);
  if (
    element !== "" &&
    element.classList.contains("right") &&
    currenteventelement.classList.contains("left")
  ) {
    countOfeventNumber = 1;
    element = currenteventelement;
  } else if (
    element !== "" &&
    element.classList.contains("left") &&
    currenteventelement.classList.contains("right")
  ) {
    countOfeventNumber = 1;
    element = currenteventelement;
  } else if (
    countOfeventNumber === 1 &&
    currenteventelement.classList.contains("right") &&
    previousButtonInSave.classList.contains("right")
  ) {
    countEventsForNoRepearting = 1;
    element = currenteventelement;
    countOfeventNumber = 0;
  } else if (
    countOfeventNumber === 1 &&
    currenteventelement.classList.contains("left") &&
    previousButtonInSave.classList.contains("left")
  ) {
    countEventsForNoRepearting = 1;
    element = currenteventelement;
    countOfeventNumber = 0;
  } else {
    countEventsForNoRepearting = 0;
    element = currenteventelement;
    countOfeventNumber = 0;
  }
  previousButtonInSave = this;
  //console.log(element);
  // console.log(countOfeventNumber);
  //console.log(countEventsForNoRepearting);
  return countOfeventNumber;
}

function makeNewSlide(nextSlider) {
  // console.log(countOfeventNumber);
  let cardsCollectionNew = document.querySelectorAll(".card");
  let cardsContainer = document.querySelector(".slider_container");
  let numberOfCurrentCards = cardsCollectionNew.length;
  // console.log(cardsContainer);

  nextSlider = cardsContainer.cloneNode(true);
  // console.log(nextSlider);
  // console.log(previousContainerCardsInSave);
  // console.log(secondPreviuosCardsInSave);
  if (countOfeventNumber === 1) {
    // console.log(numberOfActiveCards);
    if (
      numberOfActiveCards === 2 &&
      numberOfActiveCards !== nextSlider.children.length
    ) {
      nextSlider.lastElementChild.remove();
      previousContainerCardsInSave.pop();
    } else if (
      numberOfActiveCards === 1 &&
      numberOfActiveCards !== nextSlider.children.length
    ) {
      nextSlider.lastElementChild.remove();
      nextSlider.lastElementChild.remove();
      previousContainerCardsInSave.pop();
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 2 &&
      previousContainerCardsInSave.length === 3
    ) {
      // console.log("hello1");
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 1 &&
      previousContainerCardsInSave.length === 3
    ) {
      // console.log("hello2");
      previousContainerCardsInSave.pop();
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 1 &&
      previousContainerCardsInSave.length === 2
    ) {
      // console.log("hello3");
      previousContainerCardsInSave.pop();
    }
    // console.log(nextSlider);
    // console.log(previousContainerCardsInSave);
    for (let i = 0; i < previousContainerCardsInSave.length; i++) {
      for (let m = 0; m < pets.length; m++) {
        if (previousContainerCardsInSave[i] === pets[m].name) {
          nextSlider.children[i].firstElementChild.src = pets[m].imgforcards;
          nextSlider.children[i].children[1].textContent = pets[m].name;
        }
      }
    }
    previousContainerCardsInSave = [];
    for (let i = 0; i < cardsCollectionNew.length; i++) {
      previousContainerCardsInSave.push(
        cardsCollectionNew[i].children[1].textContent
      );
    }
    //console.log(nextSlider);
  } else if (countOfeventNumber !== 1) {
    previousContainerCardsInSave = [];
    for (let i = 0; i < cardsCollectionNew.length; i++) {
      previousContainerCardsInSave.push(
        cardsCollectionNew[i].children[1].textContent
      );
    }

    if (
      numberOfActiveCards === 2 &&
      numberOfActiveCards !== nextSlider.children.length
    ) {
      nextSlider.lastElementChild.remove();
      previousContainerCardsInSave.pop();
    } else if (
      numberOfActiveCards === 1 &&
      numberOfActiveCards !== nextSlider.children.length
    ) {
      nextSlider.lastElementChild.remove();
      nextSlider.lastElementChild.remove();
      previousContainerCardsInSave.pop();
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 2 &&
      previousContainerCardsInSave.length === 3
    ) {
      // console.log("hello1");
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 1 &&
      previousContainerCardsInSave.length === 3
    ) {
      // console.log("hello2");
      previousContainerCardsInSave.pop();
      previousContainerCardsInSave.pop();
    } else if (
      previousContainerCardsInSave.length > numberOfActiveCards &&
      numberOfActiveCards === 1 &&
      previousContainerCardsInSave.length === 2
    ) {
      // console.log("hello3");
      previousContainerCardsInSave.pop();
    }

    for (let i = 0; i < randomPetsArray.length; i++) {
      if (
        nextSlider.lastElementChild.children[1].textContent ===
          randomPetsArray[i] &&
        nextSlider.lastElementChild.children[1].textContent ===
          cardsCollectionNew[numberOfActiveCards - 1].children[1].textContent
      ) {
        let previousNumberOfSameCards = 0;
        for (let k = 1; k <= numberOfActiveCards; k++) {
          let countSameCards = [];
          let countSameCardsNumber = 0;
          //console.log(i);
          let j = i + k;
          if (j > randomPetsArray.length - 1) {
            j = 0;
            if (k === 1) {
              i = -1;
            } else if (k === 2) {
              i = -2;
            } else if (k === 3) {
              i = -3;
            }
          }
          for (let m = 0; m < pets.length; m++) {
            if (randomPetsArray[j] === pets[m].name) {
              nextSlider.children[k - 1].firstElementChild.src =
                pets[m].imgforcards;
              nextSlider.children[k - 1].children[1].textContent = pets[m].name;
            }
          }
          for (let n = 0; n < previousContainerCardsInSave.length; n++) {
            for (let t = 0; t < nextSlider.children.length; t++) {
              if (
                nextSlider.children[t].children[1].textContent ===
                  secondPreviuosCardsInSave[n] &&
                secondPreviuosCardsInSave !== []
              ) {
                countSameCards.push(secondPreviuosCardsInSave[n]);
                countSameCardsNumber++;
              }
            }
          }
          // console.log(previousNumberOfSameCards);
          
          //console.log(nextSlider);
          // console.log(countSameCards);
          // console.log(countSameCardsNumber);
          if (countSameCardsNumber > 0 && countEventsForNoRepearting === 1) {
            // console.log(j);
            let randomNumber = j + 1;
            if (randomNumber > randomPetsArray.length - 1) {
              randomNumber = 0;
            }
            // console.log(randomNumber);
            for (let m = 0; m < pets.length; m++) {
              if (randomPetsArray[randomNumber] === pets[m].name) {
                nextSlider.children[k - 1].firstElementChild.src =
                  pets[m].imgforcards;
                nextSlider.children[k - 1].children[1].textContent =
                  pets[m].name;
              }
            }
          } else if (
            previousNumberOfSameCards !== 0 &&
            countEventsForNoRepearting === 1
          ) {
            // console.log(j);
            let randomNumber = j + 1;
            if (randomNumber > randomPetsArray.length - 1) {
              randomNumber = 0;
            }
            // console.log(randomNumber);
            for (let m = 0; m < pets.length; m++) {
              if (randomPetsArray[randomNumber] === pets[m].name) {
                nextSlider.children[k - 1].firstElementChild.src =
                  pets[m].imgforcards;
                nextSlider.children[k - 1].children[1].textContent =
                  pets[m].name;
              }
            }
          }
          previousNumberOfSameCards = countSameCardsNumber;
        }
      }
    }
  }
  // console.log(previousContainerCardsInSave);
  if (previousContainerCardsInSave !== []) {
    secondPreviuosCardsInSave = [...previousContainerCardsInSave];
    // console.log(secondPreviuosCardsInSave);
  }
  //console.log(nextSlider);
  //console.log(previousContainerCardsInSave);
  return nextSlider;
}

function moveSlideLeft() {
  let nextSlider = {};
  nextSlider = makeNewSlide(nextSlider);
  nextSlider.style.marginRight = "-100%";
  mainContainer.append(nextSlider);
  setTimeout(() => {
    mainContainer.firstElementChild.style.marginLeft = "-100%";
  }, 0);
  rightArrowButton.removeEventListener("click", moveSlideLeft);
  leftArrowButton.removeEventListener("click", moveSlideRight);
  rightArrowButton.style.borderColor = "#cdcdcd";
  leftArrowButton.style.borderColor = "#cdcdcd";
  rightArrowButton.style.backgroundColor = "#f6f6f6";
  leftArrowButton.style.backgroundColor = "#f6f6f6";
  rightArrowButton.style.cursor = "not-allowed";
  leftArrowButton.style.cursor = "not-allowed";
  arrowImageLeft.src = "../../assets/icons/ArrowBlindNotActive.svg";
  arrowImageRight.src = "../../assets/icons/ArrowBlindNotActive.svg";
  arrowImageRight.style.transform = "rotate(180deg)";
  setTimeout(() => {
    nextSlider.style.marginRight = "0%";
  }, 0);
  setTimeout(() => {
    mainContainer.firstElementChild.remove();
  }, 1000);

  setTimeout(() => {
    rightArrowButton.addEventListener("click", moveSlideLeft);
    leftArrowButton.addEventListener("click", moveSlideRight);
    rightArrowButton.style.borderColor = "#f1cdb3";
    leftArrowButton.style.borderColor = "#f1cdb3";
    rightArrowButton.style.backgroundColor = "";
    leftArrowButton.style.backgroundColor = "";
    rightArrowButton.style.cursor = "pointer";
    leftArrowButton.style.cursor = "pointer";
    arrowImageLeft.src = "../../assets/icons/ArrowLeft.png";
    arrowImageRight.src = "../../assets/icons/ArrowRight.png";
    arrowImageRight.style.transform = "rotate(0deg)";
  }, 1300);
}

function moveSlideRight() {
  let nextSlider = {};
  nextSlider = makeNewSlide(nextSlider);
  nextSlider.style.marginLeft = "-100%";
  mainContainer.prepend(nextSlider);
  setTimeout(() => {
    mainContainer.lastElementChild.style.marginRight = "-100%";
  }, 0);
  rightArrowButton.removeEventListener("click", moveSlideLeft);
  leftArrowButton.removeEventListener("click", moveSlideRight);
  rightArrowButton.style.borderColor = "#cdcdcd";
  leftArrowButton.style.borderColor = "#cdcdcd";
  rightArrowButton.style.backgroundColor = "#f6f6f6";
  leftArrowButton.style.backgroundColor = "#f6f6f6";
  rightArrowButton.style.cursor = "not-allowed";
  leftArrowButton.style.cursor = "not-allowed";
  arrowImageLeft.src = "../../assets/icons/ArrowBlindNotActive.svg";
  arrowImageRight.src = "../../assets/icons/ArrowBlindNotActive.svg";
  arrowImageRight.style.transform = "rotate(180deg)";
  setTimeout(() => {
    nextSlider.style.marginLeft = "0%";
  }, 0);
  setTimeout(() => {
    mainContainer.lastElementChild.remove();
  }, 1000);

  setTimeout(() => {
    rightArrowButton.addEventListener("click", moveSlideLeft);
    leftArrowButton.addEventListener("click", moveSlideRight);
    rightArrowButton.style.borderColor = "#f1cdb3";
    leftArrowButton.style.borderColor = "#f1cdb3";
    rightArrowButton.style.backgroundColor = "";
    leftArrowButton.style.backgroundColor = "";
    rightArrowButton.style.cursor = "pointer";
    leftArrowButton.style.cursor = "pointer";
    arrowImageLeft.src = "../../assets/icons/ArrowLeft.png";
    arrowImageRight.src = "../../assets/icons/ArrowRight.png";
    arrowImageRight.style.transform = "rotate(0deg)";
  }, 1300);
}

getRandonArrayOfPets();

fillCards();
window.addEventListener("load", receiveNumberOfActiveCards);
window.addEventListener("resize", receiveNumberOfActiveCards);
window.addEventListener("resize", getDefaultContainer);
window.addEventListener("resize", fillCards);
//window.addEventListener("resize", setMaxWidthForMainContainer);
rightArrowButton.addEventListener("click", countOfevent);
leftArrowButton.addEventListener("click", countOfevent);
rightArrowButton.addEventListener("click", moveSlideLeft);
leftArrowButton.addEventListener("click", moveSlideRight);
