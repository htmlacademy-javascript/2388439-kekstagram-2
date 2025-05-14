import {error, isHashtagsValid} from './check-hashtag-validity.js';
import {isEscapeKey} from './utils.js';
import {onEffectChange} from './slider-editor.js';

export const uploadForm = document.querySelector('.img-upload__form');
const img = uploadForm.querySelector('.img-upload__preview img');

const pageBody = document.querySelector('body');

const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const smaller = uploadForm.querySelector('.scale__control--smaller');
const bigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const effectList = uploadForm.querySelector('.effects__list');

let scale = 1;
const SCALE_STEP = 0.25;

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

smaller.addEventListener('click', onSmallerClick);

bigger.addEventListener('click', onBiggerClick);

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

function resetScale() {
  scale = 1;
  img.style.transform = `scale(${scale})`;
  scaleControl.value = `${scale * 100}%`;
}

function closePhotoEditor(){
  pageBody.classList.remove('modal-open');
  photoEditorForm.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileControl.value = '';
  resetScale();
}

export const initUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const onHashtagInput = () => {
  isHashtagsValid(hashtagInput.value);
};

pristine.addValidator(hashtagInput, isHashtagsValid, error, 2, false);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, '');
    uploadForm.submit();
  }
};

uploadFileControl.addEventListener('change', initUploadModal);

hashtagInput.addEventListener('input', onHashtagInput);

uploadForm.addEventListener('submit', onFormSubmit);

effectList.addEventListener('change', onEffectChange);

export{resetScale};
