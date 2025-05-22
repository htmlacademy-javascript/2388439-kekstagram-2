import{openBigPicture} from './viewer-image.js';
import {debounce} from './utils.js';


let currentFilter = 'filter-default';
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const debounceRender = debounce(openBigPicture);
