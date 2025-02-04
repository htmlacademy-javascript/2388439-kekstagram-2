// Функция для проверки длины строки.

function checkMaxLength(checkCharacterCount, maxLength){
  checkCharacterCount = checkCharacterCount.length;
  return checkCharacterCount <= maxLength;
}

checkMaxLength('Я люблю яблоки', 20);

// Функция для проверки, является ли строка палиндромом.

function palindromeCheck(stringCheck){
  stringCheck = stringCheck.replaceAll(' ', '');
  stringCheck = stringCheck.toLowerCase();
  const len = stringCheck.length;

  for(let i = 0; i < len / 2; i++){
    if (stringCheck[i] !== stringCheck[len - 1 - i]){
      return false;
    }
  }
  return true;
}

palindromeCheck('Лёша на полке клопа нашёл');
