// @flow
import BaseButton from './BaseButton';
import { GithubLinkButton as className } from './GithubLinkButton.module.css';

const idToUrl = (id: string) => `https://github.com/${id}`;

const GithubLinkButton = ({ githubId }: { githubId: string }) =>
  BaseButton({ className, url: idToUrl(githubId), icon: 'github' });

export default GithubLinkButton;
