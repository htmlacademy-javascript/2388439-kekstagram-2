// Нужно создать функцию для создания массива из 25 сгенерированных объектов.

// Структура объекта:

const object {
  //id: // Число от 1 до 25
  //url: // Адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
  //description: //строка — описание фотографии.
  //like: // число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  //comments: // массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. 
            // Количество комментариев к каждой фотографии — случайное число от 0 до 30. 
            // Все комментарии генерируются случайным образом.
}

//У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.

//Массив для идентификаторов

let identifiers = []

// Массив с сылками на аватары

let avatar = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
]

// Массив с описаниями для фотографий.

let description = [
  'Описание фотографии-1',
  'Описание фотографии-2',
  'Описание фотографии-3',
  'Описание фотографии-4',
  'Описание фотографии-5',
  'Описание фотографии-6'
]

let likes = []

let DescriptionPublishedPhoto = function (){
  return {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: ''
  }
}