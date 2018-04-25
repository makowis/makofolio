/* eslint-disable react/prop-types */
// @flow
import BaseButton from './BaseButton';
import { FacebookLinkButton as className } from './FacebookLinkButton.module.css';

const FacebookLinkButton = ({ url }: { url: string }) =>
  BaseButton({ className, url, icon: 'facebook-f' });

export default FacebookLinkButton;
