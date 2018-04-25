/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
