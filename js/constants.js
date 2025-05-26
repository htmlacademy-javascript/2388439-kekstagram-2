export const MAX_HASHTAGS = 5;
export const MAX_SYMBOLS = 20;

export const COUNT_STEP = 5;
export const REMOVE_MESSAGE_TIMEOUT = 5000;

export const CONTAINER_CLASS = '.pictures';
export const TEMPLATE_SELECTOR = '#picture';
export const PICTURE_CLASS = '.picture';
export const IMAGE_CLASS = '.picture__img';
export const INFO_CLASS = '.picture__info';
export const COMMENTS_CLASS = '.picture__comments';
export const LIKES_CLASS = '.picture__likes';
export const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

export const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

export const SORTFUNC = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};

export const MAX_PICTURE_COUNT = 10;
export const DEBOUNCE_DEPAY = 500;

export const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];
