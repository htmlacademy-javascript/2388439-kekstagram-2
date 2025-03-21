// 1. Загрузка нового изображения на сайт и заполнение информации о нём

import {DESCRIPTIONS, RANGE_COMMENTS, RANGE_LIKES} from'./data';
import {getRandomInteger, createRangeOfNumbers} from'./utils';
import {createComment} from './view';

const createPhoto = function(photoId) {

  const quantityComments = getRandomInteger(RANGE_COMMENTS.MIN, RANGE_COMMENTS.MAX); // Диапазон комментариев.
  const likeRange = createRangeOfNumbers(RANGE_LIKES.MIN, RANGE_LIKES.MAX); // Количество лайков для каждой фотки. Случайное число от 15 до 200
  const randomLikes = getRandomInteger(RANGE_LIKES.MIN, likeRange.length - 1); // Генерация случайного количества лайков
  const generateComment = Array.from({length: quantityComments}, createComment); // Создаёт случайное количество комментариев из выбранного диапазона.

  const generatedPhotoData = {
    id: photoId,
    url:`photos/${photoId}.jpg`,
    description: DESCRIPTIONS[photoId - 1],
    likes: likeRange[randomLikes],
    comments: generateComment
  };
  return generatedPhotoData;
};

export const album = Array.from({ length: DESCRIPTIONS.length }, (_, index) => createPhoto(index + 1));