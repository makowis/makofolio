/* eslint-env jest */
// @flow
import reducer from './index';

it('root reducer', () => {
  const state = reducer();
  expect(state).toMatchSnapshot();
});
