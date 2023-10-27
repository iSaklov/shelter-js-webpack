import getImg from "./getImg";
import icon from "../../icons/close.svg"

export default function createModalTemplate(pet) {
	const modal = document.createElement("div");
	const modal_content = document.createElement("div");
	const modal_info = document.createElement("div");
	const img = document.createElement("img");
	const name = document.createElement("h3");
	const subheading = document.createElement("h4");
	const description = document.createElement("h5");
	const list = document.createElement("ul");
	const age = document.createElement("li");
	const inoculations = document.createElement("li");
	const diseases = document.createElement("li");
	const parasites = document.createElement("li");
	const button = document.createElement("a");

	img.src = getImg(pet.id)
	name.innerText = pet.name;
	subheading.innerText = pet.type + " - " + pet.breed;
	description.innerText = pet.description;
	age.innerHTML = `<h5><b>Age</b>: ${pet.age}</h5>`
	inoculations.innerHTML = `<h5><b>Inoculations</b>: ${pet.inoculations.join(', ')}</h5>`
	diseases.innerHTML = `<h5><b>Diseases</b>: ${pet.diseases.join(', ')}</h5>`
	parasites.innerHTML = `<h5><b>Parasites</b>: ${pet.parasites.join(', ')}</h5>`
	button.innerHTML = `<img src="${icon}" alt="close-icon">`;

	modal.id = "modal";
	modal.classList.add("modal");
	modal_content.classList.add("modal__content");
	modal_info.classList.add("modal__info");
	button.id = "close__modal";
	button.classList.add("button__float");

	list.appendChild(age);
	list.appendChild(inoculations);
	list.appendChild(diseases);
	list.appendChild(parasites);

	modal_content.appendChild(img);
	modal_content.appendChild(modal_info);
	modal_info.appendChild(name);
	modal_info.appendChild(subheading);
	modal_info.appendChild(description);
	modal_info.appendChild(list);
	modal_content.appendChild(button)

	modal.appendChild(modal_content);

  return modal;
}
