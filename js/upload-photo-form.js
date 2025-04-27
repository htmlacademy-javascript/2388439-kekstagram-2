import { isEscapeKey } from './utils.js';

// 1.1. Загрузка нового изображения:

// выбор файла с изображением для загрузки;
// изменение масштаба изображения;
// применение одного из заранее заготовленных эффектов;
// выбор глубины эффекта с помощью ползунка;
// добавление текстового комментария;
// добавление хэштегов.

const uploadForm = document.querySelector('.img-upload__form'); // Форма для загрузки изображений на сайт
const pageBody = document.querySelector('body'); // Тело документа.

const uploadFileControl = uploadForm.querySelector('#upload-file'); //Поле для загрузки изображения.
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay'); // Форма редактирования изображения.
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel'); // Кнопка для закрытия формы редактирования.

const hashtagInput = uploadForm.querySelector('.text__hashtags'); //Поле для добавления хештега к изображению.
const commentInput = uploadForm.querySelector('.text__description'); // Поле для добавления комментария к изображению.

const onPhotoEditorResetBtnClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      uploadForm.reset();
      closePhotoEditor();
    }
  }
};

function closePhotoEditor(){
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileControl.value = '';
}

export const initUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'mg-upload__field-wrapper',
});
pristine.addValidator(hashtagInput, (value) => {
  console.log(/\d/.test(value));
});
