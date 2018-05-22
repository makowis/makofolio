// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { userURL } from '@makofolio/github/userURL';
import type { GitHubID } from '@makofolio/github/models/GitHubID';
import BaseButton from './BaseButton';
import { GithubLinkButton as className } from './GithubLinkButton.module.css';

const GithubLinkButton = ({ githubId }: { githubId: GitHubID }) =>
  BaseButton({ className, url: userURL(githubId), icon: 'github' });

export default GithubLinkButton;
