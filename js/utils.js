// Вспомогательные функции.

//.................... Функция генерирует случайные целочисленные значения....................//

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//.................... Функция обходит входной массив и передаёт значения в массив назначения.........//

// initialValue - входное значение.
// cyclelLimit - условие остановки цикла.
// collectedIndices - массив для передаваемых значений

const retrieveIndices = (initialValue ,cyclelLimit, collectedIndices) => {
  collectedIndices = [];
  for(let i = initialValue; i <= cyclelLimit; i++){
    collectedIndices.push(i);
  }
  return collectedIndices;
};

//....................Функция создаёт массив из диапазона передаваемых чисел.....................//

// startValue - начальное значение диапазона.
// endValue - конечное значение диапазона.

const createRangeOfNumbers = (startValue ,endValue) => {
  const desiredRange = [];
  for(let i = startValue; i <= endValue; i++){
    desiredRange.push(i);
  }
  return desiredRange;
};
export{getRandomInteger, retrieveIndices, createRangeOfNumbers};
