const modelElems = document.querySelectorAll('.constructor__model-elem');
const modelColors = document.querySelectorAll('.constructor__color-elem');
const mainImage = document.querySelector('.constructor-image');
const colorsElem = document.querySelectorAll('.constructor-color');
const constructor = document.querySelector('.constructor');
const totalModel = document.querySelector('.constructor-total-model');
const totalColor = document.querySelector('.constructor-total-color');

modelElems.forEach((elem, index) => {
  elem.addEventListener('click', (e) => {
    modelElems.forEach((item) =>
      item.classList.remove('constructor__model-elem_active')
    );
    changeImage(modelElems[index].getAttribute('data-url'));
    modelElems[index].classList.add('constructor__model-elem_active');
    showTab(index, modelColors);
    clearColor();
    totalModel.innerHTML = modelElems[index].innerHTML;
  });
});

colorsElem.forEach((elem, index) => {
  elem.addEventListener('click', (e) => {
    changeImage(colorsElem[index].getAttribute('data-url'));
    clearColor();
    colorsElem[index].classList.add('constructor-color_active');
    totalColor.innerHTML = colorsElem[index].children[1].innerHTML;
  });
});

function showTab(num, tabs) {
  tabs.forEach((elem) =>
    elem.classList.remove('constructor__color-elem_active')
  );
  tabs[num].classList.add('constructor__color-elem_active');
}

function clearColor() {
  colorsElem.forEach((elem) =>
    elem.classList.remove('constructor-color_active')
  );
  totalColor.innerHTML = 'Выберите цвет';
}

function changeImage(src) {
  mainImage.src = src;
}
