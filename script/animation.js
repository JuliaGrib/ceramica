// const body = document.querySelector('body');
// const teethActive = document.querySelector('.teeth__img_active');

// // console.log(teethActive);
// let prevScroll = 0;
// // console.log(window.pageYOffset);

// let teethStyle = getComputedStyle(teethActive);
// let topik = parseInt(teethStyle.top);
// let parthTop = Math.abs(topik) / 9 / 8;

// window.addEventListener('scroll', () => {
//   let teethStyleCur = getComputedStyle(teethActive);
//   let topCur = parseInt(teethStyleCur.top);
//   console.log(parthTop);

//   if (prevScroll > window.pageYOffset) {
//     console.log('верх', window.pageYOffset);
//     prevScroll = window.pageYOffset;
//     teethActive.style.top = topCur - parthTop + 'px';
//   } else if (prevScroll < window.pageYOffset) {
//     console.log('вниз', window.pageYOffset);
//     prevScroll = window.pageYOffset;
//     teethActive.style.top = topCur + parthTop + 'px';
//     // console.log(top + 1 + 'px');
//   }
// });

function animationMobTeeth() {
  let teethMobCollection = document.querySelectorAll('.teeth__img');
  let count = 0;

  setInterval(() => {
    count++;
    teethMobCollection.forEach((elem) => {
      elem.classList.remove('teeth__img_active');
    });

    if (count == teethMobCollection.length) {
      count = 0;
    }

    teethMobCollection[count].classList.add('teeth__img_active');
  }, 150);
}

animationMobTeeth();
