// Нужно создать функцию для создания массива из 25 сгенерированных объектов.

// Структура объекта:

const object {
  id: // Число от 1 до 25
  url: // Адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
  description: //строка — описание фотографии.
  likes: // число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments: // массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. 
            // Количество комментариев к каждой фотографии — случайное число от 0 до 30. 
            // Все комментарии генерируются случайным образом.
}

//У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.