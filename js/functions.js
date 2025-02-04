// Функция для проверки длины строки.

function checkMaxLength(checkCharacterCount, maxLength){
  checkCharacterCount = checkCharacterCount.length;
  return checkCharacterCount <= maxLength;
}

checkMaxLength('Я люблю яблоки', 20);
