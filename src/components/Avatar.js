// @flow
import React from 'react';
import { avatar as className } from './Avatar.css';

type Props = {
  src: string,
  alt: string,
};

// alt は受け取っているが認識しないのでdisableにする
// eslint-disable-next-line jsx-a11y/alt-text
const Avatar = (props: Props) => <img {...{ ...props, className }} />;

export default Avatar;
