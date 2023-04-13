import pets from '../../data/petsDB.json';
import createCardTemplate from "./helpers/createCardTemplate";
import getRandomInt from "./helpers/getRandomInt";
import getTotalPages from './helpers/getTotalPages.js';
import jsonToArray from './helpers/jsonToArray.js';
import shuffleArray from './helpers/shuffleArray.js';

if (document.querySelector("#slider")) {
	const SLIDER = document.querySelector("#slider");
	const BTN_FIRST = document.querySelector("#btn__first__page");
	const BTN_PREV = document.querySelector("#btn__prev");
	const BTN_NUM = document.querySelector("#btn__current__num");
	const BTN_NEXT = document.querySelector("#btn__next");
	const BTN_LAST = document.querySelector("#btn__last__page");

	let ARRAY_PETS = [];

	let numPerPge;
	let totalPages;
	let currentPage = 1;

	const initItems = (numPerPge) => {

	}

	const prevPage = () => {
		if (currentPage > 1) {
			currentPage--;
			showPage(currentPage);
		}
	}

	const nextPage = () => {
		if (currentPage < totalPages) {
			currentPage++;
			showPage(currentPage);
		}
	}

	const showPage = (page) => {

		SLIDER.innerHTML = "";

		for (let i = (page - 1) * numPerPge; i < (page * numPerPge) && i < ARRAY_PETS.length; i++) {
			const card = createCardTemplate(ARRAY_PETS[i]);
			SLIDER.appendChild(card);
		}


		console.log('BTN_NUM', BTN_NUM)
		console.log('page', page)
		BTN_NUM.innerHTML = "";
		BTN_NUM.innerHTML = `<h4>${page}</h4>`;

		if (page === 1) {
			BTN_FIRST.classList.add('inactive')
			BTN_PREV.classList.add('inactive')
		} else {
			BTN_FIRST.classList.remove('inactive')
			BTN_PREV.classList.remove('inactive')
		}

		if (page === totalPages) {
			BTN_LAST.classList.add('inactive')
			BTN_NEXT.classList.add('inactive')
		} else {
			BTN_LAST.classList.remove('inactive')
			BTN_NEXT.classList.remove('inactive')
		}
	}

	document.addEventListener('DOMContentLoaded', () => {

		if (window.matchMedia("(max-width: 480px)").matches) {
			numPerPge = 3;

			for (let i = 0; i < 6; i++) {
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets).slice(0, 3))]
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets).slice(3, 6))]
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets).slice(6))]
			}
		} else if (window.matchMedia("(min-width: 481px) and (max-width: 768px").matches) {
			numPerPge = 6;

			for (let i = 0; i < 6; i++) {
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets).slice(0, 7))]
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets).slice(7))]
			}
		} else {
			numPerPge = 8;

			for (let i = 0; i < 6; i++) {
				ARRAY_PETS = [...ARRAY_PETS, ...shuffleArray(jsonToArray(pets))]
			}
		}

		totalPages = getTotalPages(ARRAY_PETS.length, numPerPge)

		showPage(currentPage)
	})

	BTN_FIRST.addEventListener('click', () => {
		currentPage = 1;
		showPage(currentPage);
	})
	BTN_LAST.addEventListener('click', () => {
		currentPage = totalPages;
		showPage(currentPage);
	})
	BTN_PREV.addEventListener('click', prevPage)
	BTN_NEXT.addEventListener('click', nextPage)
}
