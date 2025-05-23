import{openBigPicture} from './viewer-image.js';
import {debounce} from './utils.js';
import{photosArray} from './thumbnail-rendering.js'
import {FILTER, SORTFUNC, MAX_PICTURE_COUNT, DEBOUNCE_DEPAY} from './constants.js'

let currentFilter = 'filter-default';
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const debounceRender = debounce(openBigPicture);

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if(!targetButton.matches('button')) {
    return;
  }

  if(activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyfilter();
}

function applyfilter() {
  let filteredPictures = [];
  if(currentFilter === FILTER.default) {
    filteredPictures = pictures;
  }
  if(currentFilter === FILTER.random) {
    filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0, 10);
  }
  if (currentFilter === FILTER.discussed) {
    filteredPictures = pictures.toSorted((a, b) => b.comments.length - a.comments.length);
  }
  debounceRender(filteredPictures);
}

function configFilter(pictureData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
}

export {configFilter};
