/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import GithubLinkButton from './GithubLinkButton';
import { toGitHubID } from '../../github/models/GitHubID';

it('renders GithubLinkButton', () => {
  const tree = renderer
    .create(<GithubLinkButton githubId={toGitHubID('makowis')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
