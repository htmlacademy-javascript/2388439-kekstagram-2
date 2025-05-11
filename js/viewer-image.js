//import {album} from './upload.js';
import {clearComments, renderComments, bigPictureNode} from './render-comments.js';
import {album} from './thumbnail-rendering.js';
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

// function openBigPicture(pictureId){
//   const currentPhoto = album.find((photo) => photo.id === Number(pictureId));

//   bigPictureImgNode.src = currentPhoto.url;
//   likesCountNode.textContent = currentPhoto.likes;

//   renderComments(currentPhoto.comments);

//   bigPictureNode.classList.remove('hidden');
//   bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
//   document.body.classList.add('modal-open');
//   document.addEventListener('keydown', onEscKeyDown);

// }

function openBigPicture(pictureId) {
  // Предполагаем, что album - это промис, который возвращает объект
  album.then((albumData) => {
    // Находим текущую фотографию по pictureId
    const currentPhoto = Object.values(albumData).find((photo) => photo.id === Number(pictureId));

    if (currentPhoto) {
      // Устанавливаем данные для большого изображения
      bigPictureImgNode.src = currentPhoto.url;
      likesCountNode.textContent = currentPhoto.likes;

      // Если renderComments больше не нужна, закомментируйте или удалите следующую строку
      renderComments(currentPhoto.comments);

      // Показываем большое изображение
      bigPictureNode.classList.remove('hidden');
      bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', onEscKeyDown);
    } else {
      console.error('Фотография не найдена');
    }
  }).catch((error) => {
    console.error('Ошибка при получении альбома:', error);
  });
}

export {openBigPicture};
