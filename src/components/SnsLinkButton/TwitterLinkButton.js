// @flow
import BaseButton from './BaseButton';
import { TwitterLinkButton as className } from './TwitterLinkButton.module.css';
import { userURL } from '../../twitter/userURL';
import type { TwitterID } from '../../twitter/models/TwitterID';

const TwitterLinkButton = ({ twitterId }: { twitterId: TwitterID }) =>
  BaseButton({ className, url: userURL(twitterId), icon: 'twitter' });

export default TwitterLinkButton;
