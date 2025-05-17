const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTempleate = document.querySelector('#data-error').content;
const body = document.body;

export const showErrorMessage = (message) => {
  const errorArea = errorLoadDataTempleate.cloneNode(true);

  if(message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }
  body.append(errorArea);
  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};
