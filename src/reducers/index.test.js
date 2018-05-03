/* eslint-env jest */
// @flow
import reducer from './index';
import person, { moriC } from '../models/Person';

it('root reducer', () => {
  const state = reducer(
    { person, slides: [] },
    { type: 'CHANGE_PERSON', person },
  );
  expect(state).toMatchSnapshot();
});

it('root reducer change other person', () => {
  const state = reducer(
    { person, slides: [] },
    { type: 'CHANGE_PERSON', person: moriC },
  );
  expect(state).toMatchSnapshot();
});
