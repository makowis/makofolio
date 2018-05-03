/* eslint-env jest */
// @flow
import reducer from './index';
import { changePerson } from './person';
import person, { moriC } from '../models/Person';

it('root reducer', () => {
  const state = reducer(
    { person, slide: { slides: [] } },
    changePerson(person),
  );
  expect(state).toMatchSnapshot();
});

it('root reducer change other person', () => {
  const state = reducer({ person, slide: { slides: [] } }, changePerson(moriC));
  expect(state).toMatchSnapshot();
});
