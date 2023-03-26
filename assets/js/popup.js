import { body, overlay } from "./burger.js";
let cardsContainer = document.querySelector(".slider_container");
let mainSliderContainer = document.querySelector(".main-slider-container");
//console.log(cardsContainer);
let cardsArray = document.getElementsByClassName("card");
let mainContainer = document.querySelector(".main-container");

function updateCardsContainer(event) {
  //console.log(event);
  setTimeout(() => {
    cardsContainer = document.querySelector(".slider_container");
    //console.log(cardsContainer.children);
    cardsContainer.addEventListener("click", openPopUp);
    return cardsContainer;
  }, 1050);
  
}

async function openPopUp(event) {
  event.stopPropagation();
  let card = event.target.closest(".card");
  // console.log(card);
  if (!card) {
    return;
  }
  let pets = "../../assets/data/pets.json";
  const res = await fetch(pets);
  const data = await res.json();
  //console.log(data);
  let cardPets = card.children;
  //console.log(cardPets);
  let popUpContainer = document.createElement("div");
  popUpContainer.classList.add("popup-container");
  let closeButton = document.createElement("div");
  closeButton.classList.add("close-button");
  let closeImage = document.createElement("img");
  closeImage.src = "../../assets/icons/closepopup.svg";
  closeImage.alt = "close";
  closeImage.classList.add("close-image");
  let popUpImage = document.createElement("img");
  popUpImage.classList.add("popup-image");
  let describtionContainer = document.createElement("div");
  describtionContainer.classList.add("describtion-container");
  let nameOfPetBlock = document.createElement("div");
  nameOfPetBlock.classList.add("name-block");
  let nameOfPet = document.createElement("h3");
  nameOfPet.classList.add("pet-name");
  let breedOfPet = document.createElement("h4");
  breedOfPet.classList.add("pet-breed");
  let petDescription = document.createElement("p");
  petDescription.classList.add("pet-description");
  let petsAdditionalInformation = document.createElement("ul");
  petsAdditionalInformation.classList.add("otherinformation-list");
  let fragment = new DocumentFragment();
  for (let i = 1; i <= 4; i++) {
    let petsOtherInformationItem = document.createElement("li");
    petsOtherInformationItem.classList.add("otherinformation-item");
    let informationTitle = document.createElement("p");
    informationTitle.classList.add("inf-title");
    let informationDescription = document.createElement("p");
    informationDescription.classList.add("inf-desc");
    petsOtherInformationItem.append(informationTitle);
    petsOtherInformationItem.append(informationDescription);
    fragment.append(petsOtherInformationItem);
  }
  popUpContainer.append(closeButton);
  closeButton.append(closeImage);
  popUpContainer.append(popUpImage);
  popUpContainer.append(describtionContainer);
  describtionContainer.append(nameOfPetBlock);
  nameOfPetBlock.append(nameOfPet);
  nameOfPetBlock.append(breedOfPet);
  describtionContainer.append(petDescription);
  describtionContainer.append(petsAdditionalInformation);
  petsAdditionalInformation.append(fragment);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < card.children.length; j++) {
      if (card.children[j].textContent === data[i].name) {
        popUpImage.src = data[i].img;
        popUpImage.alt = data[i].name;
        nameOfPet.textContent = data[i].name;
        breedOfPet.textContent = `${data[i].type} - ${data[i].breed}`;
        petDescription.textContent = data[i].description;
        for (let k = 0; k < 4; k++) {
          if (k === 0) {
            petsAdditionalInformation.children[
              k
            ].firstElementChild.textContent = "Age:";
            petsAdditionalInformation.children[k].lastElementChild.textContent =
              data[i].age;
          } else if (k === 1) {
            petsAdditionalInformation.children[
              k
            ].firstElementChild.textContent = "Inoculations:";
            petsAdditionalInformation.children[k].lastElementChild.textContent =
              data[i].inoculations;
          } else if (k === 2) {
            petsAdditionalInformation.children[
              k
            ].firstElementChild.textContent = "Diseases:";
            petsAdditionalInformation.children[k].lastElementChild.textContent =
              data[i].diseases;
          } else if (k === 3) {
            petsAdditionalInformation.children[
              k
            ].firstElementChild.textContent = "Parasites:";
            petsAdditionalInformation.children[k].lastElementChild.textContent =
              data[i].parasites;
          }
        }
      }
    }
  }
  //console.log(popUpContainer);
  mainContainer.prepend(popUpContainer);
  overlay.style.display = "block";
  body.style.overflow = "hidden";
  closeButton.addEventListener("click", closePopUp);
}

function closePopUp(event) {
  event.stopPropagation();
  let element = event.target;
  //console.log(element);
  //console.log(this);
  let popUpContainer = document.querySelector(".popup-container");
  //console.log(popUpContainer);
  if (popUpContainer !== null) {
    popUpContainer.remove();
    overlay.style.display = "none";
    body.style.overflow = "auto";
  }
}

cardsContainer.addEventListener("click", openPopUp);
overlay.addEventListener("click", closePopUp);
mainSliderContainer.addEventListener("DOMNodeInserted", updateCardsContainer);