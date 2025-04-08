import {DESCRIPTIONS, RANGE_COMMENTS, RANGE_LIKES} from'./data.js';
import {getRandomInteger, createRangeOfNumbers} from'./utils.js';
import {createComment} from './view.js';

const createPhoto = function(photoId) {

  const quantityComments = getRandomInteger(RANGE_COMMENTS.MIN, RANGE_COMMENTS.MAX);
  const likeRange = createRangeOfNumbers(RANGE_LIKES.MIN, RANGE_LIKES.MAX);
  const randomLikes = getRandomInteger(RANGE_LIKES.MIN, likeRange.length - 1);
  const generateComment = Array.from({length: quantityComments}, createComment);

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
