import { getRandomInt, createRandomIdGenerator } from './utils.js';
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 30;
const PHOTO_COUNT = 25;
const NAMES = [
  'Олег',
  'Игорь',
  'Николай',
  'Анна',
  'Юлия',
  'Иван',
  'Валерий',
  'Данил',
  'Дмитрий',
  'Егор',
  'Денис',
  'Дарья',
  'Милена',
  'Владимир',
  'Константин',
  'Аврора',
  'Майкл',
  'Алла',
  'Максим',
  'Виктор',
  'Геннадий',
  'Григорий',
  'Михаил',
  'Арсен',
];
const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Крутые виды.',
  'Живописный пляж',
  'Лучший фотограф',
  'Вкусные блюда',
  'Теплая обувь',
  'Ретро автомобиль',
  'Нетронутый рай',
  'Оливьешка',
  'Кино на свежем воздухе',
  'Красти краб',
  'Губка Боб',
  'Акуна матата',
];

const getRandomMessage = () => {
  const generateMessageId = createRandomIdGenerator(0, 5);
  return MASSAGES[generateMessageId()];
};

const createComment = () => {
  const num = getRandomInt(1, AVATAR_COUNT);
  const generateCommentId = createRandomIdGenerator(0, 1000);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${num}.svg`,
    message: Array.from({ length: getRandomInt(1, 2) }, getRandomMessage),
    name: NAMES[getRandomInt(0, 24)],
  };
};

const generatePhotoId = createRandomIdGenerator(1, 25);
const createPhoto = () => {
  const photoId = generatePhotoId();
  const descriptionsIndex = getRandomInt(0, 11);
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: DESCRIPTIONS[descriptionsIndex],
    likes: getRandomInt(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: Array.from(
      { length: getRandomInt(0, COMMENTS_MAX_COUNT) },
      createComment
    ),
  };
};
const createPhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);

export { createPhotos };
