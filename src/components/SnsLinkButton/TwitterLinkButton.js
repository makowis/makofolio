// @flow
import BaseButton from './BaseButton';
import { TwitterLinkButton as className } from './TwitterLinkButton.module.css';

const idToUrl = (id: string) => `https://twitter.com/${id}`;

const TwitterLinkButton = ({ twitterId }: { twitterId: string }) =>
  BaseButton({ className, url: idToUrl(twitterId), icon: 'twitter' });

export default TwitterLinkButton;
