import pets from "../../data/petsDB.json"
import createCardTemplate from "./helpers/createCardTemplate";
import getRandomInt from "./helpers/getRandomInt";

const BTN_LEFT = document.querySelector("#btn__left");
const BTN_RIGHT = document.querySelector("#btn__right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_ACTIVE = document.querySelector("#item__active");
const ITEM_LEFT = document.querySelector("#item__left");
const ITEM_RIGHT = document.querySelector("#item__right");

let cardsNumber;
let changedItem;
let activeCardsIds = [];
let nextCardsIds = [];

const initItems = (cardsNumber) => {
	for (let i = 0; i < cardsNumber; ) {
		const num = getRandomInt(0, 8);
		if (!activeCardsIds.includes(num)) {
			activeCardsIds.push(num);
			i++;
		}
	}

	for (let i = 0; i < cardsNumber;) {
		const num = getRandomInt(0, 8);
		if (!activeCardsIds.includes(num) && !nextCardsIds.includes(num)) {
			nextCardsIds.push(num);
			i++;
		}
	}

	activeCardsIds.forEach((id) => {
		const card = createCardTemplate(pets[id]);
		ITEM_ACTIVE.appendChild(card);
	})

	nextCardsIds.forEach((id) => {
		const card = createCardTemplate(pets[id]);
		ITEM_LEFT.appendChild(card);
	})

	nextCardsIds.forEach((id) => {
		const card = createCardTemplate(pets[id]);
		ITEM_RIGHT.appendChild(card);
	})

	BTN_LEFT.addEventListener("click", moveLeft);
	BTN_RIGHT.addEventListener("click", moveRight);
}

const generateChangedIds = () => {
	activeCardsIds = [...nextCardsIds];
	nextCardsIds = [];

	for (let i = 0; i < cardsNumber; ) {
		const num = getRandomInt(0, 8);
		if (!activeCardsIds.includes(num) && !nextCardsIds.includes(num)) {
			nextCardsIds.push(num);
			i++;
		}
	}
}

const moveLeft = () => {
	CAROUSEL.classList.add("transition__left");
  BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition__right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

document.addEventListener("DOMContentLoaded", () => {

	if (window.matchMedia("(max-width: 480px)").matches) {
		cardsNumber = 1;
		initItems(cardsNumber)
	} else if (window.matchMedia("(min-width: 481px) and (max-width: 768px").matches) {
		cardsNumber = 2;
		initItems(cardsNumber)
	} else {
		cardsNumber = 3;
		initItems(cardsNumber)
	}
})

// window.addEventListener("resize", () => {
// })

CAROUSEL.addEventListener("animationend", (animationEvent) => {

	if (animationEvent.animationName === "move__left") {
		CAROUSEL.classList.remove("transition__left");
		ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML
		ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
		changedItem = ITEM_LEFT;
	} else {
		CAROUSEL.classList.remove("transition__right");
		ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
		ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
		changedItem = ITEM_RIGHT;
	}

	generateChangedIds();

	changedItem.innerHTML = "";
	nextCardsIds.forEach((id) => {
		const card = createCardTemplate(pets[id]);
		changedItem.appendChild(card);
	})

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})
