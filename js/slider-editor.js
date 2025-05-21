const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const slider = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadWrapper.querySelector('.effect-level__value');
const img = imgUploadWrapper.querySelector('.img-upload__preview img');
const selectorImg = img.classList;

export const resetFilter = () => {
  img.style.removeProperty('filter');
  effectLevel.classList.add('hidden');
  if (selectorImg && img.classList.contains(selectorImg)) {
    img.classList.replace(selectorImg, 'effects__preview--none');
  }
};

noUiSlider.create(slider, {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1,
  },
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

effectLevel.classList.add('hidden');

const onEffectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
  switch (effect) {
    case 'none':
      img.style.filter = 'none';
      break;
    case 'chrome':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
  }
};

const updateFilter = (effect) => {
  const value = effectLevelValue.value;
  switch (effect) {
    case 'chrome':
      img.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      img.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      img.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      img.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      img.style.filter = `brightness(${value})`;
      break;
    default:
      img.style.filter = 'none';
  }
};

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
  const effect = document.querySelector('input[name="effect"]:checked').value;
  updateFilter(effect);
});

export {onEffectChange};
