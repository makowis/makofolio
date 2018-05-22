// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { userURL } from '@makofolio/twitter/userURL';
import type { TwitterID } from '@makofolio/twitter/models/TwitterID';
import BaseButton from './BaseButton';
import { TwitterLinkButton as className } from './TwitterLinkButton.module.css';

const TwitterLinkButton = ({ twitterId }: { twitterId: TwitterID }) =>
  BaseButton({ className, url: userURL(twitterId), icon: 'twitter' });

export default TwitterLinkButton;
