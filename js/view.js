// 4. Просмотр загруженных изображений

import {NAME_AUTHORS, COMMENTS, RANGE_COMMENTS_ID} from'./data.js';
import {getRandomInteger, retrieveIndices, createRangeOfNumbers} from'./utils.js';

//.................... Фунция создающая комментарии.....................//
const createComment = () => {

  const avatarAuthors = createRangeOfNumbers(1,NAME_AUTHORS.length);
  retrieveIndices(1, NAME_AUTHORS.length, NAME_AUTHORS);
  const commentsId = createRangeOfNumbers(RANGE_COMMENTS_ID.MIN, RANGE_COMMENTS_ID.MAX);

  const usedIds = [];
  const randomCommentsId = getRandomInteger(0, commentsId.length - 1);
  while(usedIds.includes(randomCommentsId)){
    usedIds.push(randomCommentsId);
  }

  const randomNameIndex = getRandomInteger(0, NAME_AUTHORS.length - 1);
  const randomMessageIndex = getRandomInteger(0, COMMENTS.length - 1);

  return {
    id: randomCommentsId,
    name: NAME_AUTHORS[randomNameIndex],
    avatar:`img/avatar-${avatarAuthors[randomNameIndex]}.svg`,
    message: COMMENTS[randomMessageIndex]
  };
};

export {createComment};

//------------------------------------------------------------------------//
