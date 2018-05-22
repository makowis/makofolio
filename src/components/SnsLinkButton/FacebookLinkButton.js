/* eslint-disable react/prop-types */
// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { userURL } from '@makofolio/facebook/userURL';
import type { FacebookID } from '@makofolio/facebook/models/FacebookID';
import BaseButton from './BaseButton';
import { FacebookLinkButton as className } from './FacebookLinkButton.module.css';

const FacebookLinkButton = ({ facebookId }: { facebookId: FacebookID }) =>
  BaseButton({ className, url: userURL(facebookId), icon: 'facebook-f' });

export default FacebookLinkButton;
