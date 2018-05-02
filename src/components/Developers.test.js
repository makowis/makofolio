/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Developers from './Developers';
import person from '../models/Person';

const mockPersonClick = () => () => {};

it('renders Developers', () => {
  const tree = renderer
    .create(<Developers people={[person]} onPersonClick={mockPersonClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
