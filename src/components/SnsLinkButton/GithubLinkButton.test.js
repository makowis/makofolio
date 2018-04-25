/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import GithubLinkButton from './GithubLinkButton';

it('renders GithubLinkButton', () => {
  const tree = renderer
    .create(<GithubLinkButton url="https://github.com/makowis" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
