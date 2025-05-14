const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const retrieveIndices = (initialValue ,cyclelLimit, collectedIndices) => {
  collectedIndices = [];
  for(let i = initialValue; i <= cyclelLimit; i++){
    collectedIndices.push(i);
  }
  return collectedIndices;
};

const createRangeOfNumbers = (startValue ,endValue) => {
  const desiredRange = [];
  for(let i = startValue; i <= endValue; i++){
    desiredRange.push(i);
  }
  return desiredRange;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num % 10 === 0 || num % 100 > 4 && num % 100 < 21) {
    return genitivePlural;
  }

  return num % 10 === 1 ? nominative : genitiveSingular;
};

export{getRandomInteger, retrieveIndices, createRangeOfNumbers, isEscapeKey, numDecline};
