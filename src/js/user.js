import {
  // eslint-disable-next-line import/named
  fetchData,
} from './http';

// eslint-disable-next-line import/prefer-default-export
export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
