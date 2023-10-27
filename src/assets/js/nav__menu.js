const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');

document.addEventListener('click', (e) => {
	if (e.target.closest('.nav__item')
			|| e.target.closest('.burger')
			|| (navbar.classList.contains('menu__open') && !e.target.classList.contains('nav__menu'))) {
		body.classList.toggle('ovetrflow-hidden');
		navbar.classList.toggle('menu__open');
	}
});
