/* eslint-disable react/prop-types */
// @flow
import BaseButton from './BaseButton';
import { FacebookLinkButton as className } from './FacebookLinkButton.module.css';

const idToUrl = (id: string) => `https://www.facebook.com/${id}`;

const FacebookLinkButton = ({ facebookId }: { facebookId: string }) =>
  BaseButton({ className, url: idToUrl(facebookId), icon: 'facebook-f' });

export default FacebookLinkButton;
