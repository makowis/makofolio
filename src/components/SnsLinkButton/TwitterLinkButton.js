// @flow
import BaseButton from './BaseButton';
import { TwitterLinkButton as className } from './TwitterLinkButton.module.css';

const TwitterLinkButton = ({ url }: { url: string }) =>
  BaseButton({ className, url, icon: 'twitter' });

export default TwitterLinkButton;
