/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Slides from './Slides';

it('renders Person', () => {
  const tree = renderer.create(<Slides slides={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
