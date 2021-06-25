import {
  getLevel,
} from '../user';
import {
  // eslint-disable-next-line import/named
  fetchData,
} from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
// eslint-disable-next-line no-undef

test('should call getLevel', () => {
  const response = {
    status: 'ok',
    level: 2,
  };
  fetchData.mockReturnValue(response);
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
