/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Person } from './Person';
import person from '../models/Person';

it('renders Person', () => {
  const tree = renderer.create(<Person {...person} />).toJSON();
  expect(tree).toMatchSnapshot();
});
