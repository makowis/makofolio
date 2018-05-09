// @flow
/**
 * パスの状態変化による制御を行います。
 */
import createHistory from 'history/createBrowserHistory';
import type { Store } from 'redux';
import makowis, { persons } from './models/Person';
import { changePerson } from './reducers/person';

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
