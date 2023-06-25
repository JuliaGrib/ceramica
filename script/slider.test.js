const images = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.computedStyleMap.width = width * images.length + 'px';
  images.forEach((elem) => {
    elem.style.width = width + 'px';
    elem.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', init);

init();

document.querySelector('.slider-next').addEventListener('click', () => {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

setInterval(() => {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
}, 8000);

// <!-- <div class="banner">
// <div class="slider">
//   <div class="slider-line">
//     <img class="slider__img" src="./img/banners/1.jpg" alt="" />
//     <img class="slider__img" src="./img/banners/2.jpg" alt="" />
//     <img class="slider__img" src="./img/banners/3.jpg" alt="" />
//   </div>
// </div>
// <button class="button slider-prev">Prev</button>
// <button class="button slider-next">Next</button>
// </div> -->
// <!-- <div class="animation">
// <img src="./img/teeth/1.png" alt="" class="teeth" />
// </div> -->
