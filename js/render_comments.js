import {bigPictureNode} from './Image_viewer';
const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
const socialCommentTempleate = socialCommentsNode.querySelector('.social__comment');
const commentsCountMode = bigPictureNode.querySelector('.social__comment-count');
const commentLoaderNode = bigPictureNode.querySelector('.social__comments-loader');
socialCommentsNode.innerHTML = '';

const renderNextComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.comments.forEach((comment) => {
    const socialCommentNode = socialCommentTempleate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentNode);
  });

  socialCommentsNode.appendChild(socialCommentsFragment);
  commentsCountMode.firstChild.textContent = `${renderedCommentsLength} из`;
  commentsCountMode.querySelector('.comments-count').textContent = comments.length;

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

export{clearComments, renderComments};
