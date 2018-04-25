// @flow
import BaseButton from './BaseButton';
import { GithubLinkButton as className } from './GithubLinkButton.module.css';

const GithubLinkButton = ({ url }: { url: string }) =>
  BaseButton({ className, url, icon: 'github' });

export default GithubLinkButton;
