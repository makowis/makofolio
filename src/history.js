/* eslint-disable global-require */
// @flow
/**
 * パスの状態変化による制御を行います。
 */
import type { Store } from 'redux';
import makowis, { persons } from './models/Person';
import { changePerson } from './reducers/person';

const getCreateHistory = () => {
  // テスト環境ではMemoryHistoryを利用する
  if (process.env.NODE_ENV === 'test') {
    return require('history').createMemoryHistory;
  }
  return require('history').createBrowserHistory;
};
const createHistory = getCreateHistory();
const history = createHistory();

export const setupHistoryHandler = (store: Store) => {
  const handleChangeLocation = (location) => {
    const personId = location.pathname.substr(1);
    const person = persons[personId];
    store.dispatch(changePerson(person || makowis));
  };
  handleChangeLocation(history.location);
  history.listen(handleChangeLocation);
};

export default history;
