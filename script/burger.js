const burgerBtn = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const menuListNodes = document.querySelector('.list_header').childNodes;
const menuNode = document.querySelector('.menu');
const background = document.querySelector('.background');

burgerBtn.addEventListener('click', menuShowHide);
background.addEventListener('click', menuShowHide);

function menuShowHide() {
  burgerLine.classList.toggle('burger_active');
  menuNode.classList.toggle('menu_active');
  background.classList.toggle('background_active');
  document.querySelector('html').classList.toggle('overflow');
}
