import pets from "../../data/petsDB.json";
import createModalTemplate from "./helpers/createModalTemplate";

const BODY = document.querySelector("body");

export const openModal = (index) => {
	const modal = createModalTemplate(pets[index])
	BODY.appendChild(modal)
	BODY.classList.add("ovetrflow-hidden")

	const closeBtn = document.querySelector("#close__modal");
	closeBtn.onclick = () => {
		BODY.removeChild(modal)
		BODY.classList.remove("ovetrflow-hidden")
	};

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			BODY.removeChild(modal)
			BODY.classList.remove("ovetrflow-hidden")
		}
	})
}
