// Функция для проверки длины строки.

function checkStringLength(string, maxLength){
  return string.length <= maxLength;
}

checkStringLength('Я люблю яблоки', 20);

// Функция для проверки, является ли строка палиндромом.

function checksStringPalindrome(string){
  string = string.replaceAll(' ', '').toLowerCase();

  for(let i = 0; i < string.length / 2; i++){
    if (string[i] !== string[string.length - 1 - i]){
      return false;
    }
  }
  return true;
}

checksStringPalindrome('Лёша на полке клопа нашёл');
