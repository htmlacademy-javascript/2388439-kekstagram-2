import {album} from './upload';
const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures')

album.forEach((photo) => {

const thumbnails = template.cloneNode(true);
const image = thumbnails.querySelector('.picture__img');
const info = thumbnails.querySelector('.picture__info');

image.src = photo.url;
image.alt = photo.description;

info.querySelector('.picture__comments').textContent = photo.comments.length;
info.querySelector('.picture__likes').textContent = photo.likes;

container.appendChild(thumbnails);
});

/* <template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template> */

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.