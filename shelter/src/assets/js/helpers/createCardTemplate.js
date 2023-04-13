import getImg from "./getImg";

export default function createCardTemplate(pet) {
	const card = document.createElement("div");
	const img = document.createElement("img");
	const name = document.createElement("h4");
	const button = document.createElement("a");

	img.src = getImg(pet.id)
	name.innerText = pet.name;
	// const p = document.createElement("p")
	// p.innerText = pet.id - 1;
	// card.appendChild(p);
	button.innerText = "Learn more";

	card.classList.add("card");
	button.classList.add("button__secondary");

	card.appendChild(img);
	card.appendChild(name);
	card.appendChild(button);

  return card;
}
