/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Person } from './Person';

it('renders Person Container', () => {
  const tree = renderer.create(<Person />).toJSON();
  expect(tree).toMatchSnapshot();
});
