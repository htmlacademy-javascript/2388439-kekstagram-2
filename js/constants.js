const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const SORTFUNC = {
  random: () => - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};

const MAX_PICTURE_COUNT = 10;
const DEBOUNCE_DEPAY = 500;

export{FILTER, SORTFUNC, MAX_PICTURE_COUNT, DEBOUNCE_DEPAY};
