import {album} from './upload.js';

const bigPictureNode = document.querySelector('.big-picture');
const bigPictureImgNode = bigPictureNode.querySelector('.big-picture__img').querySelector('img');
const likesCountNode = bigPictureNode.querySelector('.likes-count');
const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
const socialCommentsTempleate = socialCommentsNode.querySelector('.social__comment');
const commentsCaptionNode = bigPictureNode.querySelector('.social__caption');
const commentsCountMode = bigPictureNode.querySelector('.social__comment-count');
const commentLoaderNode = bigPictureNode.querySelector('.social__comments-loader');
const bigPictureCancelNode = bigPictureNode.querySelector('.cancel');

function onEscKeyDown () {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      bigPictureNode.classList.add('hidden');
    }
  });
}

const closeBigPicture = () => {
  bigPictureNode.classList.add('hidden');
  bigPictureCancelNode.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeyDown());
};

function onBigPictureCancelClick () {
  closeBigPicture();
}

const openBigPicture = (pictureId) => {
  const currentPhoto = album.find((photo) => photo.id === Number(pictureId));
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImgNode.src = currentPhoto.url;
  likesCountNode.textContent = currentPhoto.likes;
  socialCommentsNode.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialCommentNode = socialCommentsTempleate.cloneNode(true);
    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentNode);
  });

  socialCommentsNode.appendChild(socialCommentsFragment);
  commentsCaptionNode.textContent = currentPhoto.description;
  commentsCountMode.classList.add('hidden');
  commentLoaderNode.classList.add('hidden');

  bigPictureNode.classList.remove('hidden');
  bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onEscKeyDown());
};

export{openBigPicture};
