import {isEscapeKey} from "./utils";

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if(evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

const appendNotification = (templeate, trigger = null) => {
  trigger?.();
  const notificationNode = templeate.cloneNode(true);
  body.append(notificationNode);
  body.addEventListener('click', closeNotification);
  body.addEventListener('keydown', closeNotification);
};

export{closeNotification, appendNotification};
