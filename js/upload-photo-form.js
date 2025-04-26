import { isEscapeKey } from "./utils";

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
