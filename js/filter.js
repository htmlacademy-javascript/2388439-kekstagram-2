import{openBigPicture} from './viewer-image.js';
import {debounce} from './utils.js';


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
  currentFilter = target.getAttribute('id');

  applyfilter();
}

