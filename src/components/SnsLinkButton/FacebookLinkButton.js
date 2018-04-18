/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import BaseButton from './BaseButton';

const FacebookLinkButton = (props: { url: string }) => {
  const btnstyle = {
    background: '#3b75d4',
  };
  return <BaseButton url={props.url} icon="facebook-f" btnstyle={btnstyle} />;
};

export default FacebookLinkButton;
