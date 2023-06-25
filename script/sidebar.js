const sidebarElems = document.querySelectorAll('.sidebar__elem');

sidebarElems.forEach((node) => {
  node.addEventListener('click', (e) => {
    let list = e.target;
    let sublist = list.nextElementSibling;

    list.classList.toggle('sidebar__elem_active');
    sublist.classList.toggle('sidebar__sublist_active');

    if (sublist.style.maxHeight) {
      sublist.style.maxHeight = null;
    } else {
      sublist.style.maxHeight = sublist.scrollHeight + 'px';
    }
  });
});
