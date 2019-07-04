import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
    animation: 150,
    ghostClass: "ghost"
  });
};

export { initSortable };
