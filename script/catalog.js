const showCategories = document.querySelector('.show-categories');
const categories = document.querySelector('.categories');

const showFilter = document.querySelector('.show-filter');
const filter = document.querySelector('.filter');

showCategories.addEventListener('click', () => {
  categories.classList.toggle('no-overflow');

  if (categories.classList.contains('no-overflow')) {
    showCategories.innerHTML = 'Скрыть категории';
    showCategories.classList.add('active-filter');
  } else {
    showCategories.innerHTML = 'Показать категории';
    showCategories.classList.remove('active-filter');
  }
});

showFilter.addEventListener('click', () => {
  filter.classList.toggle('no-overflow');

  if (filter.classList.contains('no-overflow')) {
    showFilter.innerHTML = 'Скрыть фильтр';
    showFilter.classList.add('active-filter');
  } else {
    showFilter.innerHTML = 'Показать фильтр';
    showFilter.classList.remove('active-filter');
  }
});
