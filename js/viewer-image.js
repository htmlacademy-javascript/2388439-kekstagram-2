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
    bigPictureImgNode.src = photo.url;
    likesCountNode.textContent = photo.likes;

    renderComments(photo.comments);
    bigPictureNode.classList.remove('hidden');
    bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);
  }
}
export {openBigPicture};
