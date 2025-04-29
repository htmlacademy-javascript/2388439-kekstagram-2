import { isEscapeKey } from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form'); //imgUploadForm
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay'); //uploadOverlay
const uploadFileControl = uploadForm.querySelector('#upload-file'); //uploadFile
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel'); //imaUploadCancel
const smaller = uploadForm.querySelector('.scale__control--smaller');
const bigger = uploadForm.querySelector('.scale__control--bigger');
const img = uploadForm.querySelector('.img-upload__preview');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const effectLevel = uploadForm.querySelector('.img-upload__effect-level');
const effectList = uploadForm.querySelector('.effects__list');
const hashtagInput = uploadForm.querySelector('.text__hashtags'); //inputHashtag
const commentInput = uploadForm.querySelector('.text__description');

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
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(hashtagInput, (value) => {
  const hasNumber = /\d/.test(value);
  return !hasNumber;
}, 'Ошибонька');
