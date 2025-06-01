import{DEBOUNCE_DEPAY} from './constants.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num % 10 === 0 || num % 100 > 4 && num % 100 < 21) {
    return genitivePlural;
  }

  return num % 10 === 1 ? nominative : genitiveSingular;
};

function debounce (callback, timeoutDelay = DEBOUNCE_DEPAY) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelay);
  };
}

export{isEscapeKey, numDecline, debounce};
