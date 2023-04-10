const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav__item');

burgerBtn.addEventListener('click', menuToggle);

navLinks.forEach((item) => item.addEventListener('click', menuToggle));

document.addEventListener('click', (e) => {
	if (navbar.classList.contains('menu__open') && !e.target.closest('.navbar')) {
		menuToggle();
	}
});


function menuToggle() {
	body.classList.toggle('ovetrflow-hidden');
	navbar.classList.toggle('menu__open');
}
