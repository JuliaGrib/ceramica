const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger-menu');

// const burgerLine = document.querySelector('.burger__line');
// const menuListNodes = document.querySelector('.list_header').childNodes;
// const menuNode = document.querySelector('.menu-mob');
// const background = document.querySelector('.background');

burgerBtn.addEventListener('click', menuShowHide);
// background.addEventListener('click', menuShowHide);

function menuShowHide() {
  burgerBtn.classList.toggle('burger__btn_active');
  burgerMenu.classList.toggle('burger-menu_active');
  // burgerLine.classList.toggle('burger_active');
  // menuNode.classList.toggle('menu-mob_active');
  // background.classList.toggle('background_active');
  document.querySelector('html').classList.toggle('overflow');
}

const allBtn = document.querySelectorAll('.btn');

allBtn.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
