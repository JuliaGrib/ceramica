const burgerOpenBtn = document.querySelector('.burger-btn');
const burgerCloseBtn = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');
const menuElems = document.querySelectorAll('.burger-menu__link');
const background = document.querySelector('.background');
const body = document.body;

burgerOpenBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_active');
  background.classList.add('background_active');
  body.classList.add('overflow');
});

burgerCloseBtn.addEventListener('click', closeMenu);

menuElems.forEach((elem) => {
  elem.addEventListener('click', closeMenu);
});

background.addEventListener('click', closeMenu);

function closeMenu() {
  burgerMenu.classList.remove('burger-menu_active');
  background.classList.remove('background_active');
  body.classList.remove('overflow');
}
