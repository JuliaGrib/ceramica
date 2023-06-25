const tabs = document.querySelectorAll('.product-page__tab');
const descr = document.querySelectorAll('.testt');

tabs.forEach((node, index) => {
  node.addEventListener('click', (e) => {
    tabs.forEach((elem) => {
      elem.classList.remove('product-page__tab_active');
    });
    e.target.classList.add('product-page__tab_active');

    descr.forEach((elem) => {
      elem.classList.remove('testt_active');
    });

    descr[index].classList.add('testt_active');
  });
});
