

const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const slider = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadWrapper.querySelector('.effect-level__value');
const img = imgUploadWrapper.querySelector('.img-upload__preview');

noUiSlider.create(effectSlider, {
  range: {
    'min': 0,
    'max': 1,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectSlider.noUiSlider.get();
  effectRadioBtns.forEach((item) =>{
    if(item.checked){
      if(item.value !== 'none') {
        sliderContainer.classList.remove('hidden');
        imgPreview.style.filter = StyleFilterByEffexts[item.value](effectLevelInput.value);
      } else {
        fesetFilter();
      }
    }
  });
});
