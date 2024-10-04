// Hamburger button code.

const hamButton = document.querySelector('#hamburger-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
