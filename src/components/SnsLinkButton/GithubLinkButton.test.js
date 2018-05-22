/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toGitHubID } from '@makofolio/github/models/GitHubID';
import GithubLinkButton from './GithubLinkButton';

it('renders GithubLinkButton', () => {
  const tree = renderer
    .create(<GithubLinkButton githubId={toGitHubID('makowis')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
