// @flow
import BaseButton from './BaseButton';
import { GithubLinkButton as className } from './GithubLinkButton.module.css';
import { userURL } from '../../github/userURL';
import type { GitHubID } from '../../github/models/GitHubID';

const GithubLinkButton = ({ githubId }: { githubId: GitHubID }) =>
  BaseButton({ className, url: userURL(githubId), icon: 'github' });

export default GithubLinkButton;
