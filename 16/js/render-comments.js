import {COUNT_STEP} from './constants.js';
let currentCount = 0;
let comments = [];

const bigPictureNode = document.querySelector('.big-picture');
const commentLoaderNode = bigPictureNode.querySelector('.social__comments-loader');
const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsNode.querySelector('.social__comment');
const commentsCountNode = bigPictureNode.querySelector('.social__comment-count');
socialCommentsNode.innerHTML = '';

const renderNextComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const socialCommentNode = socialCommentTemplate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentNode);
  });

  socialCommentsNode.appendChild(socialCommentsFragment);

  commentsCountNode.firstChild.textContent = renderedCommentsLength;
  commentsCountNode.querySelector('.social__comment-total-count').textContent = comments.length;

  if(renderedCommentsLength >= comments.length){
    commentLoaderNode.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  socialCommentsNode.innerHTML = '';
  commentLoaderNode.classList.remove('hidden');
  commentLoaderNode.removeEventListener('click', renderNextComments);
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  renderNextComments();

  commentLoaderNode.addEventListener('click', renderNextComments);
};

export{clearComments, renderComments, bigPictureNode};
