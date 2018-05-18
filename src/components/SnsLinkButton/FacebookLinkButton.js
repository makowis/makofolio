/* eslint-disable react/prop-types */
// @flow
import BaseButton from './BaseButton';
import { FacebookLinkButton as className } from './FacebookLinkButton.module.css';
import { userURL } from '../../facebook/userURL';
import type { FacebookID } from '../../facebook/models/FacebookID';

const FacebookLinkButton = ({ facebookId }: { facebookId: FacebookID }) =>
  BaseButton({ className, url: userURL(facebookId), icon: 'facebook-f' });

export default FacebookLinkButton;
