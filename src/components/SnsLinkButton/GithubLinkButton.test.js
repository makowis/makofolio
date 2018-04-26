/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import GithubLinkButton from './GithubLinkButton';

it('renders GithubLinkButton', () => {
  const tree = renderer
    .create(<GithubLinkButton githubId="makowis" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
