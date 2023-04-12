import pets from "../../data/petsDB.json"
import getImg from "./helpers/getImg";
import getRandomInt from "./helpers/getRandomInt";

const BTN_LEFT = document.querySelector("#btn__left");
const BTN_RIGHT = document.querySelector("#btn__right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_ACTIVE = document.querySelector("#item__active");
const ITEM_LEFT = document.querySelector("#item__left");
const ITEM_RIGHT = document.querySelector("#item__right");

let changedItem;
let activeCardsIds = [];
let nextCardsIds = [];
// let prevCardsIds = [];
let currentClick = "";
let prevClick = "";

const updateCardsIds = () => {

	// prevCardsIds = [...activeCardsIds];
	activeCardsIds = [...nextCardsIds];
	nextCardsIds = [];

	for (let i = 0; i < 3; ) {
		const num = getRandomInt(1, 8);
		if (!activeCardsIds.includes(num) && !nextCardsIds.includes(num)) {
			nextCardsIds.push(num);
			i++;
		}
	}
}

const createCardTemplate = (pet) => {
	const card = document.createElement("div");
	const img = document.createElement("img");
	const name = document.createElement("h4");
	const button = document.createElement("a");

	img.src = getImg(pet.id)
	name.innerText = pet.name;
	button.innerText = "Learn more";

	card.classList.add("card__content");
	button.classList.add("button__secondary");

	card.appendChild(img);
	card.appendChild(name);
	card.appendChild(button);

  return card;
}

const initItems = (cardsNumber) => {
	for (let i = 0; i < cardsNumber; ) {
		const num = getRandomInt(1, 8);
		if (!activeCardsIds.includes(num)) {
			activeCardsIds.push(num);
			i++;
		}
	}

	for (let i = 0; i < cardsNumber;) {
		const num = getRandomInt(1, 8);
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
	console.log('init')
}

const moveLeft = () => {
	prevClick === "" ? prevClick = "left" : null // init history
	currentClick = "left";
  CAROUSEL.classList.add("transition__left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
	prevClick === "" ? prevClick = "right" : null
	currentClick = "right";
  CAROUSEL.classList.add("transition__right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

document.addEventListener("DOMContentLoaded", initItems(3))

CAROUSEL.addEventListener("animationend", (animationEvent) => {

	if (animationEvent.animationName === "move__left") {
		CAROUSEL.classList.remove("transition__left");

		if (currentClick === prevClick) {
			console.log('next btn-left')
			ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
			ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;

			changedItem = ITEM_LEFT;
		} else {
			console.log('prev btn-left')
			ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
			ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;

			changedItem = ITEM_RIGHT;
		}

	} else {
		CAROUSEL.classList.remove("transition__right");

		if (currentClick === prevClick) {
			console.log('next btn-right')
			ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
			ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;

			changedItem = ITEM_RIGHT;
		} else {
			console.log('prev btn-right')
			ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML
			ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;

			changedItem = ITEM_LEFT;
		}
	}

	updateCardsIds();

	changedItem.innerHTML = "";
	nextCardsIds.forEach((id) => {
		const card = createCardTemplate(pets[id]);
		changedItem.appendChild(card);
	})

	prevClick = currentClick;

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})
