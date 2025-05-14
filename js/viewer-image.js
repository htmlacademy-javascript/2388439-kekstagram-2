import {album} from './upload.js';
import {clearComments, renderComments} from './render-comments.js';
const bigPictureNode = document.querySelector('.big-picture');
const bigPictureImgNode = bigPictureNode.querySelector('.big-picture__img').querySelector('img');
const likesCountNode = bigPictureNode.querySelector('.likes-count');
const bigPictureCancelNode = bigPictureNode.querySelector('.cancel');

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

function closeBigPicture(){
  clearComments();

  bigPictureNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancelNode.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeyDown);
}

function openBigPicture(photo) {

  if (photo) {
    bigPictureImgNode.src = photo.url; // Устанавливаем URL большого изображения
    likesCountNode.textContent = photo.likes; // Устанавливаем количество лайков

    renderComments(photo.comments); // Отображаем комментарии
    bigPictureNode.classList.remove('hidden'); // Показываем модальное окно
    bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick); // Обработчик закрытия
    document.body.classList.add('modal-open'); // Блокируем прокрутку
    document.addEventListener('keydown', onEscKeyDown); // Обработчик нажатия клавиши Esc
  }
}
export {openBigPicture};
