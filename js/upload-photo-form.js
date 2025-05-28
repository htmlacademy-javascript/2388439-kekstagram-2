import {sendData} from './api.js';
import {isEscapeKey} from './utils.js';
import {appendNotification} from './notification.js';
import {onEffectChange, resetFilter} from './slider-editor.js';
import {error, isHashtagsValid} from './check-hashtag-validity.js';
import {FILE_TYPES, ERROR_UPLOAD_MESAGE} from './constants.js';
import {showErrorMessage} from './error-message.js';
import {configFilter} from './filter.js';

export const uploadForm = document.querySelector('.img-upload__form');
export const pageBody = document.querySelector('body');

const img = uploadForm.querySelector('.img-upload__preview > img');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');
const uploadFileInput = uploadForm.querySelector('.img-upload__input');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const smaller = uploadForm.querySelector('.scale__control--smaller');
const bigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const effectList = uploadForm.querySelector('.effects__list');
const uploadPreviewEffects = document.querySelectorAll('.effects__preview');

const formSubmitButton = uploadForm.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Идёт отправка...',
};

const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

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

const resetValues = () => {
  resetFilter();
  resetScale();
  uploadFileControl.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
};

function closePhotoEditor(){
  pageBody.classList.remove('modal-open');
  photoEditorForm.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  resetValues();
}

export const initUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
    onFileInputChange();
  });
};

const onHashtagInput = () => {
  isHashtagsValid(hashtagInput.value);
};

pristine.addValidator(hashtagInput, isHashtagsValid, error, 2, false);

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enabledButton = (text) => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    disabledButton(SubmitButtonText.SENDING);
    const formData = new FormData(evt.target);
    sendData(formData)
      .then(() => {
        appendNotification(templateSuccess, closePhotoEditor());
      })
      .catch(() => {
        appendNotification(templateError);
      })
      .finally(() =>{
        enabledButton(SubmitButtonText.IDLE);
      });
  }
};

function onFileInputChange() {
  const file = uploadFileInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if(matches) {
    const url = URL.createObjectURL(file);
    img.src = url;
    uploadPreviewEffects.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
    });
  }else{
    showErrorMessage(ERROR_UPLOAD_MESAGE);
    return;
  }
}

uploadFileControl.addEventListener('change', initUploadModal);

hashtagInput.addEventListener('input', onHashtagInput);

uploadForm.addEventListener('submit', onFormSubmit);

effectList.addEventListener('change', onEffectChange);

export{resetScale, onFileInputChange};
