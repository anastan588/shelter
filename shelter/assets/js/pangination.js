import pets from "../data/pets.json" assert { type: "json" };
let cardsContainerDefault = document.querySelector(".slider_container");
let cardsCollectionStatic = document.querySelectorAll(".card");
let cardsCollection = document.getElementsByClassName("card");
let mainContainer = document.querySelector(".main-slider-container");
let rightArrowButton = document.querySelector(".right");
let leftArrowButton = document.querySelector(".left");
let rightArrowButtonInnerText = document.querySelector(".right_image");
let leftArrowButtonInnerText = document.querySelector(".left_image");
let currentPageButton = document.querySelector(".number");
let startLeftArrowButton = document.querySelector(".end_left");
let endRightArrowButton = document.querySelector(".end_right");
let startLeftArrowButtonInnerText = document.querySelector(".end_left_image");
let endRightArrowButtonInnerText = document.querySelector(".end_right_image");

// console.log(pets);
// console.log(cardsCollectionStatic);
// console.log(cardsContainerDefault);
// console.log(leftArrowButton);
let randomPetsArray = [];
// let randomPetsArray2 = [];
let cardsArray = [];
let numberOfActiveCards = 0;
let numberOfEndPage = 0;
let currentPageButtonNew = "";

function getRandomCardsArray() {
  let namesArray = [];
  let names = [];
  for (let j = 0; j < pets.length; j++) {
    //   console.log(pets[j].name);
    names.push(pets[j].name);
    //   console.log(names);
  }
  namesArray = names.sort(() => Math.random() - 0.5);
  // console.log(namesArray);
  let firstPartOfArray = namesArray.slice(0, 4).sort(() => Math.random() - 0.5);
  let secondPartOfArray = namesArray
    .slice(4, 8)
    .sort(() => Math.random() - 0.5);
  let thirdPartOfArray = namesArray.slice(0, 2).sort(() => Math.random() - 0.5);
  let fourthPartOfArray = namesArray
    .slice(2, 8)
    .sort(() => Math.random() - 0.5);
  // console.log(firstPartOfArray);
  // console.log(secondPartOfArray);
  // console.log(thirdPartOfArray);
  // console.log(fourthPartOfArray);
  for (let i = 0; i < firstPartOfArray.length; i++) {
    namesArray.push(firstPartOfArray[i]);
  }
  for (let i = 0; i < secondPartOfArray.length; i++) {
    namesArray.push(secondPartOfArray[i]);
  }
  for (let i = 0; i < thirdPartOfArray.length; i++) {
    namesArray.push(thirdPartOfArray[i]);
  }
  for (let i = 0; i < fourthPartOfArray.length; i++) {
    namesArray.push(fourthPartOfArray[i]);
  }
  // console.log(namesArray);
  let katrine = 0;
  let jennnifer = 0;
  let woody = 0;
  let sohia = 0;
  let charly = 0;
  let timmy = 0;
  let scarlett = 0;
  let freddie = 0;
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i] === "Katrine") {
      katrine++;
    } else if (namesArray[i] === "Jennifer") {
      jennnifer++;
    } else if (namesArray[i] === "Woody") {
      woody++;
    } else if (namesArray[i] === "Sophia") {
      sohia++;
    } else if (namesArray[i] === "Timmy") {
      timmy++;
    } else if (namesArray[i] === "Charly") {
      charly++;
    } else if (namesArray[i] === "Scarlett") {
      scarlett++;
    } else if (namesArray[i] === "Freddie") {
      freddie++;
    }
  }
  // console.log(katrine,jennnifer,woody,sohia,charly,timmy,scarlett,freddie);
  let namesArrayPart2 = [...namesArray].reverse();
  // console.log(namesArray);
  // console.log(namesArrayPart2);
  let resultArray = namesArray.concat(namesArrayPart2);
  // console.log(resultArray);
  let start = 0;
  let end = 8;
  for (let i = 0; i < 6; i++) {
    let subArray = [];

    subArray = resultArray.slice(start, end);
    // console.log(subArray);
    start = start + 8;
    end = start + 8;
    randomPetsArray.push(subArray);
    subArray = [];
  }
  console.log(randomPetsArray);
}

// getRandomCardsArray();

// function getRandomCardsArray() {
//   for (let i = 0; i < 6; i++) {
//     let namesArray = [];
//     let names = [];
//     for (let j = 0; j < pets.length; j++) {
//       //   console.log(pets[j].name);
//       names.push(pets[j].name);
//       //   console.log(names);
//     }
//     namesArray = names.sort(() => Math.random() - 0.5);
//     // console.log(namesArray);
//     randomPetsArray.push(namesArray);
//     namesArray = [];
//   }
//   console.log(randomPetsArray);
//   return randomPetsArray;
// }

function fillCards() {
  for (let i = 0; i < cardsCollection.length; i++) {
    for (let j = 0; j < pets.length; j++) {
      if (randomPetsArray[0][i] === pets[j].name) {
        cardsCollection[i].firstElementChild.src = pets[j].imgforcards;
        cardsCollection[i].children[1].textContent = pets[j].name;
      }
    }
  }
  currentPageButtonNew = currentPageButton;
  currentPageButtonNew.textContent = "1";
  console.log(numberOfEndPage);
  changeColorOfArrows(currentPageButtonNew);
}

function getDefaultContainer() {
  let cardsCurrentContainer = document.querySelector(".slider_container");
  if (
    cardsCurrentContainer.children.length <
    cardsContainerDefault.children.length
  ) {
    // console.log(cardsCurrentContainer);
    //console.log(cardsContainerDefault);
    mainContainer.append(cardsContainerDefault);
    mainContainer.firstElementChild.remove();
  }
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
    console.log(numberOfActiveCards);
    receiveNumberOfEndPage();
    return numberOfActiveCards;
  }, 100);
}

function receiveNumberOfEndPage(event) {
  numberOfEndPage = 48 / numberOfActiveCards;
  return numberOfEndPage;
}

function changeColorOfArrows(currentPageButtonNew) {
  if (currentPageButtonNew.textContent === "1") {
    console.log(currentPageButtonNew.textContent === "1");
    startLeftArrowButton.style.pointerEvents = "none";
    startLeftArrowButton.style.backgroundColor = "#f6f6f6";
    startLeftArrowButton.style.borderColor = "#cdcdcd";
    startLeftArrowButton.style.cursor = "not-allowed";
    startLeftArrowButtonInnerText.src =
      "../../assets/icons/arrowpetsblindonetwo.png";
    // console.log(startLeftArrowButtonInnerText.style.rotate !== "180deg");
    if (startLeftArrowButtonInnerText.style.rotate === "180deg") {
      startLeftArrowButtonInnerText.style.rotate = "0deg";
    }
    leftArrowButton.style.pointerEvents = "none";
    leftArrowButton.style.backgroundColor = "#f6f6f6";
    leftArrowButton.style.borderColor = "#cdcdcd";
    leftArrowButton.style.cursor = "not-allowed";
    leftArrowButtonInnerText.src = "../../assets/icons/arrowpetsblindone.png";
    // leftArrowButtonInnerText.style.rotate = "180deg";
    if (leftArrowButtonInnerText.style.rotate === "180deg") {
      leftArrowButtonInnerText.style.rotate = "0deg";
    }
    endRightArrowButton.style.pointerEvents = "auto";
    endRightArrowButton.style.backgroundColor = "#f6f6f6";
    endRightArrowButton.style.borderColor = "#f1cdb3";
    endRightArrowButton.style.cursor = "pointer";
    endRightArrowButtonInnerText.src =
      "../../assets/icons/arrowpetsdarktwo.png";
    if (endRightArrowButtonInnerText.style.rotate === "180deg") {
      endRightArrowButtonInnerText.style.rotate = "0deg";
    }
    // endRightArrowButtonInnerText.style.rotate = "180deg";
    rightArrowButton.style.pointerEvents = "auto";
    rightArrowButton.style.backgroundColor = "#f6f6f6";
    rightArrowButton.style.borderColor = "#f1cdb3";
    rightArrowButton.style.cursor = "pointer";
    rightArrowButtonInnerText.src = "../../assets/icons/arrowpetsdarkone.png";
    // rightArrowButtonInnerText.style.rotate = "180deg";
    if (rightArrowButtonInnerText.style.rotate === "180deg") {
      rightArrowButtonInnerText.style.rotate = "0deg";
    }
  } else if (currentPageButtonNew.textContent === numberOfEndPage.toString()) {
    console.log(
      currentPageButtonNew.textContent === numberOfEndPage.toString()
    );
    endRightArrowButton.style.pointerEvents = "none";
    endRightArrowButton.style.backgroundColor = "#f6f6f6";
    endRightArrowButton.style.borderColor = "#cdcdcd";
    endRightArrowButton.style.cursor = "not-allowed";
    endRightArrowButtonInnerText.src =
      "../../assets/icons/arrowpetsblindonetwo.png";
    endRightArrowButtonInnerText.style.rotate = "180deg";
    rightArrowButton.style.pointerEvents = "none";
    rightArrowButton.style.backgroundColor = "#f6f6f6";
    rightArrowButton.style.borderColor = "#cdcdcd";
    rightArrowButton.style.cursor = "not-allowed";
    rightArrowButtonInnerText.src = "../../assets/icons/arrowpetsblindone.png";
    rightArrowButtonInnerText.style.rotate = "180deg";
  } else {
    startLeftArrowButton.style.pointerEvents = "auto";
    startLeftArrowButton.style.backgroundColor = "#f6f6f6";
    startLeftArrowButton.style.borderColor = "#f1cdb3";
    startLeftArrowButton.style.cursor = "pointer";
    startLeftArrowButtonInnerText.src =
      "../../assets/icons/arrowpetsdarktwo.png";
    startLeftArrowButtonInnerText.style.rotate = "180deg";
    leftArrowButton.style.pointerEvents = "auto";
    leftArrowButton.style.backgroundColor = "#f6f6f6";
    leftArrowButton.style.borderColor = "#f1cdb3";
    leftArrowButton.style.cursor = "pointer";
    leftArrowButtonInnerText.src = "../../assets/icons/arrowpetsdarkone.png";
    leftArrowButtonInnerText.style.rotate = "180deg";
    endRightArrowButton.style.pointerEvents = "auto";
    endRightArrowButton.style.backgroundColor = "#f6f6f6";
    endRightArrowButton.style.borderColor = "#f1cdb3";
    endRightArrowButton.style.cursor = "pointer";
    endRightArrowButtonInnerText.src =
      "../../assets/icons/arrowpetsdarktwo.png";
    rightArrowButton.style.pointerEvents = "auto";
    rightArrowButton.style.backgroundColor = "#f6f6f6";
    rightArrowButton.style.borderColor = "#f1cdb3";
    rightArrowButton.style.cursor = "pointer";
    rightArrowButtonInnerText.src = "../../assets/icons/arrowpetsdarkone.png";
  }
}

function makeNewSlideLeft(nextSlider) {
  let cardsCollectionNew = document.querySelectorAll(".card");
  let cardsContainer = document.querySelector(".slider_container");
  currentPageButtonNew = document.querySelector(".number");
  // console.log(cardsCollectionNew);
  // console.log(cardsContainer);
  // console.log(numberOfEndPage);
  nextSlider = cardsContainer.cloneNode(true);
  // console.log(nextSlider.children.length);
  // console.log(nextSlider);
  let currentNumberPage = parseInt(currentPageButtonNew.textContent);
  let currentNumberI = Math.ceil(
    (numberOfActiveCards * currentNumberPage) / pets.length
  );
  // console.log(currentNumberI);
  // console.log(
  //   numberOfActiveCards === 3 &&
  //     numberOfActiveCards !== nextSlider.children.length &&
  //     nextSlider.children.length === 6
  // );
  if (
    numberOfActiveCards === 6 &&
    numberOfActiveCards !== nextSlider.children.length
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
  } else if (
    numberOfActiveCards === 3 &&
    numberOfActiveCards !== nextSlider.children.length &&
    nextSlider.children.length !== 6
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
  } else if (
    numberOfActiveCards === 3 &&
    numberOfActiveCards !== nextSlider.children.length &&
    nextSlider.children.length === 6
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    // console.log(nextSlider);
  }

  for (let i = 0; i < randomPetsArray.length; i++) {
    for (let j = 0; j < pets.length; j++) {
      // console.log(randomPetsArray[i][j]);
      if (
        nextSlider.lastElementChild.children[1].textContent ===
          randomPetsArray[i][j] &&
        nextSlider.lastElementChild.children[1].textContent ===
          cardsCollectionNew[numberOfActiveCards - 1].children[1].textContent &&
        i === currentNumberI - 1
      ) {
        // console.log(i);
        // console.log(j);
        // console.log(randomPetsArray[i][j]);
        for (let m = 1; m <= nextSlider.children.length; m++) {
          if (j === pets.length - 1) {
            j = 0;
            i = i + 1;
          } else if (j < pets.length - 1) {
            j = j + 1;
          }
          // console.log(i);
          // console.log(j);
          // console.log(randomPetsArray[i][j]);
          for (let k = 0; k < pets.length; k++) {
            if (randomPetsArray[i][j] === pets[k].name) {
              // console.log(randomPetsArray[i][j] === pets[k].name);
              nextSlider.children[m - 1].firstElementChild.src =
                pets[k].imgforcards;
              nextSlider.children[m - 1].children[1].textContent = pets[k].name;
            }
          }
        }
      }
    }
  }
  // console.log(nextSlider);
  currentPageButtonNew.textContent = currentNumberPage + 1;
  // console.log(currentPageButtonNew.textContent);
  // console.log(numberOfEndPage.toString());
  changeColorOfArrows(currentPageButtonNew);
  return nextSlider;
}

function makeNewSlideRight(nextSlider) {
  let cardsCollectionNew = document.querySelectorAll(".card");
  let cardsContainer = document.querySelector(".slider_container");
  currentPageButtonNew = document.querySelector(".number");
  console.log(cardsCollectionNew);
  // console.log(cardsContainer);
  // console.log(numberOfEndPage);
  nextSlider = cardsContainer.cloneNode(true);
  // console.log(nextSlider.children.length);
  // console.log(nextSlider);
  let currentNumberPage = parseInt(currentPageButtonNew.textContent);
  let currentNumberI = Math.floor(
    (numberOfActiveCards * currentNumberPage) / pets.length
  );
  if (numberOfActiveCards === 6 && currentNumberPage === 5) {
    currentNumberI = currentNumberI + 1;
  }
  if (
    numberOfActiveCards === 3 &&
    (currentNumberPage % 2 !== 0 ||
      currentNumberPage === 12 ||
      currentNumberPage === 10 ||
      currentNumberPage === 4 || currentNumberPage === 2 )
  ) {
    currentNumberI = Math.ceil(
      (numberOfActiveCards * currentNumberPage) / pets.length
    );
  }

  if (
    numberOfActiveCards === 3 &&
    (currentNumberPage === 11 || currentNumberPage === 3)
  ) {
    currentNumberI = currentNumberI - 1;
  }

  console.log(currentNumberI);
  // console.log(
  //   numberOfActiveCards === 3 &&
  //     numberOfActiveCards !== nextSlider.children.length &&
  //     nextSlider.children.length === 6
  // );
  if (
    numberOfActiveCards === 6 &&
    numberOfActiveCards !== nextSlider.children.length
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
  } else if (
    numberOfActiveCards === 3 &&
    numberOfActiveCards !== nextSlider.children.length &&
    nextSlider.children.length !== 6
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
  } else if (
    numberOfActiveCards === 3 &&
    numberOfActiveCards !== nextSlider.children.length &&
    nextSlider.children.length === 6
  ) {
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    nextSlider.lastElementChild.remove();
    console.log(nextSlider);
  }

  for (let i = randomPetsArray.length - 1; i >= 0; i--) {
    for (let j = pets.length - 1; j >= 0; j--) {
      // console.log(randomPetsArray[i][j]);
      if (
        nextSlider.firstElementChild.children[1].textContent ===
          randomPetsArray[i][j] &&
        nextSlider.firstElementChild.children[1].textContent ===
          cardsCollectionNew[0].children[1].textContent &&
        i === currentNumberI - 1
      ) {
        // console.log(i);
        // console.log(j);
        // console.log(randomPetsArray[i][j]);
        for (let m = nextSlider.children.length; m >= 1; m--) {
          // if (j === pets.length - 1 && i === randomPetsArray.length - 4) {
          //   j = j;
          //   i = i;
          //   console.log(j);
          // } else
          if (j === 0) {
            j = pets.length - 1;
            i = i - 1;
          } else if (j > 0) {
            j = j - 1;
            // console.log(j);
          }
          console.log(i);
          console.log(j);
          // console.log(randomPetsArray[i][j]);
          for (let k = 0; k < pets.length; k++) {
            if (randomPetsArray[i][j] === pets[k].name) {
              // console.log(randomPetsArray[i][j] === pets[k].name);
              nextSlider.children[m - 1].firstElementChild.src =
                pets[k].imgforcards;
              nextSlider.children[m - 1].children[1].textContent = pets[k].name;
            }
          }
        }
      }
    }
  }
  // console.log(nextSlider);
  currentPageButtonNew.textContent = currentNumberPage - 1;
  // console.log(currentPageButtonNew.textContent);
  // console.log(numberOfEndPage.toString());
  changeColorOfArrows(currentPageButtonNew);
  return nextSlider;
}

function moveSlideLeft() {
  // console.log(this);
  let nextSlider = {};
  nextSlider = makeNewSlideLeft(nextSlider);
  // console.log(nextSlider);
  mainContainer.append(nextSlider);
  mainContainer.firstElementChild.remove();
}

function moveSlideRight() {
  let nextSlider = {};
  nextSlider = makeNewSlideRight(nextSlider);
  // console.log(nextSlider);
  mainContainer.append(nextSlider);
  mainContainer.firstElementChild.remove();
}

getRandomCardsArray();
fillCards();
console.log(cardsCollection);
window.addEventListener("load", receiveNumberOfActiveCards);
window.addEventListener("resize", receiveNumberOfActiveCards);
window.addEventListener("resize", getDefaultContainer);
window.addEventListener("resize", fillCards);
rightArrowButton.addEventListener("click", moveSlideLeft);
leftArrowButton.addEventListener("click", moveSlideRight);
