import {album} from './upload.js';
import {clearComments, renderComments, bigPictureNode} from './render-comments.js';
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

function openBigPicture(pictureId){
  const currentPhoto = album.find((photo) => photo.id === Number(pictureId));

  bigPictureImgNode.src = currentPhoto.url;
  likesCountNode.textContent = currentPhoto.likes;

  renderComments(currentPhoto.comments);

  bigPictureNode.classList.remove('hidden');
  bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);

}

export {openBigPicture};
