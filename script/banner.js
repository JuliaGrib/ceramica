const sliderNode = document.querySelector('.slider');
const elemsNode = document.querySelector('.elems');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const elemNode = document.querySelectorAll('.banner__elem');
const prevSlide = elemNode[0];
const curSlide = elemNode[1];
const nextSlide = elemNode[2];

const images = [
  [
    `<div class="container">
    <div class="banner__info">
      <h2 class="banner__title">Зубные импланты DIO IMPLANT</h2>
      <p class="banner__subtitle">
        ШИРОКИЙ МОДЕЛЬНЫЙ РЯД ДЛЯ ЛЮБОГО КЛИНИЧЕСКОГО СЛУЧАЯ
      </p>

      <div class="banner__btns">
        <a href="#" class="btn btn_banner-primary">СТОМАТОЛОГАМ</a>
        <a href="#" class="btn btn_banner-secondary">ПАЦИЕНТАМ</a>
      </div>
    </div>
  </div>`,
    './img/banners/1.jpg',
  ],
  [
    `<div class="container">
    <div class="banner__info">
      <h2 class="banner__title">Тест2</h2>
      <p class="banner__subtitle">
        Тест2
      </p>

      <div class="banner__btns">
        <a href="#" class="btn btn_banner-primary">СТОМАТОЛОГАМ</a>
        <a href="#" class="btn btn_banner-secondary">ПАЦИЕНТАМ</a>
      </div>
    </div>
  </div>`,
    './img/banners/2.jpg',
  ],
  [
    `<div class="container">
    <div class="banner__info">
      <h2 class="banner__title">Тест3</h2>
      <p class="banner__subtitle">
        Тест3
      </p>

      <div class="banner__btns">
        <a href="#" class="btn btn_banner-primary">СТОМАТОЛОГАМ</a>
        <a href="#" class="btn btn_banner-secondary">ПАЦИЕНТАМ</a>
      </div>
    </div>
  </div>`,
    './img/banners/3.jpg',
  ],
];

let prevSlideCount = images.length - 1;
let currentSlideCount = 0;
let nextSlideCount = currentSlideCount + 1;

setSliderContent();
setStyleForSlider();

function setSliderContent() {
  prevSlide.innerHTML = images[prevSlideCount][0];
  prevSlide.style.backgroundImage = `url(${images[prevSlideCount][1]})`;

  curSlide.innerHTML = images[currentSlideCount][0];
  curSlide.style.backgroundImage = `url(${images[currentSlideCount][1]})`;

  nextSlide.innerHTML = images[nextSlideCount][0];
  nextSlide.style.backgroundImage = `url(${images[nextSlideCount][1]})`;
}

function getWidthSlideElem() {
  let bannerElemStyles = getComputedStyle(elemNode[0]);
  return bannerElemStyles.width;
}

function setStyleForSlider() {
  sliderNode.style.width = `${parseFloat(getWidthSlideElem()) * 3}px`;
  sliderNode.style.left = '-' + getWidthSlideElem();
}

function setStartPosition() {
  prevSlideCount = images.length - 1;
  nextSlideCount = currentSlideCount + 1;
}

function setChangePosition() {
  prevSlideCount = currentSlideCount - 1;
  nextSlideCount = currentSlideCount + 1;
}

function setEndPosition() {
  prevSlideCount = currentSlideCount - 1;
  nextSlideCount = 0;
}

window.addEventListener('resize', setStyleForSlider);

nextBtn.addEventListener('click', () => {
  let styles = getComputedStyle(sliderNode);
  let left = parseInt(styles.left);
  sliderNode.style.transition = '0.5s';
  sliderNode.style.left = left - parseFloat(getWidthSlideElem()) + 'px';
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  currentSlideCount++;

  if (currentSlideCount + 1 === images.length) {
    setEndPosition();
  } else if (currentSlideCount + 1 > images.length) {
    currentSlideCount = 0;
    setStartPosition();
  } else {
    setChangePosition();
  }
});

prevBtn.addEventListener('click', () => {
  sliderNode.style.transition = '0.5s';
  sliderNode.style.left = '0px';
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  currentSlideCount--;

  if (currentSlideCount < 0) {
    currentSlideCount = images.length - 1;
    setEndPosition();
  } else if (currentSlideCount === 0) {
    currentSlideCount = 0;
    setStartPosition();
  } else {
    setChangePosition();
  }
});

sliderNode.addEventListener('transitionend', () => {
  sliderNode.style.transition = '0s';
  nextBtn.disabled = false;
  prevBtn.disabled = false;
  setSliderContent();
  sliderNode.style.left = '-' + getWidthSlideElem();
});

setInterval(() => {
  nextBtn.click();
}, 8000);
