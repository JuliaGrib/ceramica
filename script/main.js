const charterElems = document.querySelectorAll('.charter__elem');

const makeSameHeight = (elems) => {
  let maxHeight = 0;
  elems.forEach((item) => {
    if (item.offsetHeight > maxHeight) {
      maxHeight = item.offsetHeight;
    }
    item.style.minHeight = maxHeight + 'px';
  });
};

makeSameHeight(charterElems);
