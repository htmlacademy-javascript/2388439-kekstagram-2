import {debounce} from './utils.js';
import {sortThumbnails} from './sorting.js';
import {FILTER, SORTFUNC, MAX_PICTURE_COUNT, ACTIVE_BUTTON_CLASS} from './constants.js';

let currentFilter = 'filter-default';

const filterElement = document.querySelector('.img-filters');

const debounceRender = debounce(sortThumbnails);

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if(!targetButton.matches('button')) {
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

let pictures = [];

function applyFilter() {
  let filteredPictures = [];

  const filterActions = {
    [FILTER.default]: () => {
      filteredPictures = pictures;
    },
    [FILTER.random]: () => {
      filteredPictures = pictures.toSorted(SORTFUNC.random).slice(0, MAX_PICTURE_COUNT);
    },
    [FILTER.discussed]: () => {
      filteredPictures = pictures.toSorted(SORTFUNC.discussed);
    }
  };

  if (filterActions[currentFilter]) {
    filterActions[currentFilter]();
  }

  debounceRender(filteredPictures);
}

function configFilter(pictureData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = pictureData;
}

export {configFilter};
