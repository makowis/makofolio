/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import BaseButton from './BaseButton';

const TwitterLinkButton = (props: { url: string }) => {
  const btnstyle = {
    background: '#1da1f3',
  };
  return <BaseButton url={props.url} icon="twitter" btnstyle={btnstyle} />;
};

export default TwitterLinkButton;
