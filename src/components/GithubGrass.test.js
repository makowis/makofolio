/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import GithubGrass from './GithubGrass';
import person from '../models/Person';

it('renders Developers', () => {
  const tree = renderer.create(<GithubGrass {...person} />).toJSON();
  expect(tree).toMatchSnapshot();
});
