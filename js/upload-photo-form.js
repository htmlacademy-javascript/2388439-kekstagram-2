import { isHashtagsValid } from './check-hashtag-validity.js';
import { isEscapeKey} from './utils.js';
//import { onEffectChange } from './effects-slider.js';

export const uploadForm = document.querySelector('.img-upload__form'); //imgUploadForm
export const img = uploadForm.querySelector('.img-upload__preview img');

const pageBody = document.querySelector('body');

const photoEditorForm = uploadForm.querySelector('.img-upload__overlay'); //uploadOverlay Форма редактирования изображения
const uploadFileControl = uploadForm.querySelector('#upload-file'); //uploadFile
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel'); //imaUploadCancel

const hashtagInput = uploadForm.querySelector('.text__hashtags'); //inputHashtag
const commentInput = uploadForm.querySelector('.text__description');

const smaller = uploadForm.querySelector('.scale__control--smaller');
const bigger = uploadForm.querySelector('.scale__control--bigger');

const scaleControl = uploadForm.querySelector('.scale__control--value');
const effectLevel = uploadForm.querySelector('.img-upload__effect-level');
//const effectList = uploadForm.querySelector('.effects__list');

const SCALE_STEP = 0.25;
let scale = 1;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

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
  pageBody.classList.remove('modal-open');
  photoEditorForm.classList.add('hidden');
  effectLevel.classList.add('hidden');
  img.style.filter = 'none';
  uploadForm.reset();
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

const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerClick = () => {
  if (scale < 1) {
    img.style.transform = `scale(${scale += SCALE_STEP})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onHashtagInput = () => {
  isHashtagsValid(hashtagInput.value);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, '');
    uploadForm.submit();
  }
};
pristine.addValidator(hashtagInput, isHashtagsValid, 2, false);

smaller.addEventListener('click', onSmallerClick);

bigger.addEventListener('click', onBiggerClick);

uploadFileControl.addEventListener('change', initUploadModal);

//effectList.addEventListener('change', onEffectChange);

hashtagInput.addEventListener('input', onHashtagInput);

uploadForm.addEventListener('submit', onFormSubmit);
