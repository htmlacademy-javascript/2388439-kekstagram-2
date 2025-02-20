// Нужно создать функцию для создания массива из 25 сгенерированных объектов.

let comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

let nameAutors = [
  'Алёша Попович',
  'Илья Муромец',
  'Добрыня Никитич',
  'Змей Горыныч',
  'Шамаханская Царица',
  'Алёнушка',
  'Любава',
  'Настасья'
] 

let generatesComments = function (){

  let randomId = getRandomInteger(0, id.length - 1);

  return {
    id: '',
    avatar: 'img/avatar-' + +'.svg',
    message:'',
    name:'',
  }
}

// Функция генерирующая случайное число из диапазона.

let getRandomInteger = (a, b) => {
  let lower = Math.ceil(Math.min(a, b));
  let upper = Math.floor(Math.max(a, b));
  let result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let descriptionPublishedPhoto = function (){ // 
  let id =[]
  for(let i = 1; i <= 25; i++){
    id.push(i);
  }
  let randomId = getRandomInteger(0, id.length - 1);
  let randomDescription = getRandomInteger(0, id.length - 1);

  return {
    id: id[randomId], // число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
    url: 'photos/' + id[randomId] +'.jpg', // строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
    description: 'Описание фотографии - ' + [randomDescription], // строка — описание фотографии. Описание придумайте самостоятельно.
    likes: '', // число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
    comments: [
      {
        id: '',
        avatar: '',
        message: '',
        name: ''
      },
    ]
  }
}